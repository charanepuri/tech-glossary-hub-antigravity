/**
 * Tech Glossary Hub — Antigravity Edition
 * Matter.js DOM Physics & Real-Time Search/Filter Engine
 */

(function () {
  'use strict';

  // Matter.js Module Aliases
  const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

  // DOM Elements
  const triggerBtn = document.getElementById('trigger-btn');
  const resetBtn = document.getElementById('reset-btn');
  const searchInput = document.getElementById('search-input');
  const searchSection = document.getElementById('search-section');
  const categoryFilters = document.getElementById('category-filters');
  const cards = Array.from(document.querySelectorAll('.card'));

  // Filter State
  let activeCategory = 'all';
  let searchQuery = '';

  // Physics State
  let engine = null;
  let runner = null;
  let mouseConstraint = null;
  let isPhysicsActive = false;
  let trackedElements = []; // { domElement, body, originalStyle, rect, isCard }
  let wallBodies = [];
  let animFrameId = null;

  // Drag tracking to distinguish clicks from drags for links
  let isDragging = false;
  let dragStartTime = 0;
  let dragStartPos = { x: 0, y: 0 };

  /**
   * Initializes all event listeners
   */
  function initListeners() {
    // 1. Decouple search input & section from Antigravity:
    // Ensure clicking, focusing, or typing in search does NOT trigger zero gravity
    if (searchInput) {
      searchInput.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      searchInput.addEventListener('focus', (e) => {
        e.stopPropagation();
      });
      searchInput.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
      searchInput.addEventListener('input', handleSearchInput);
    }

    if (searchSection) {
      searchSection.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      searchSection.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
    }

    // 2. Category filter buttons click listener
    if (categoryFilters) {
      categoryFilters.addEventListener('click', (e) => {
        e.stopPropagation();
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;

        // Update active class on filter buttons
        const allPills = categoryFilters.querySelectorAll('.filter-pill');
        allPills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');

        activeCategory = pill.dataset.filter || 'all';
        applyFilters();
      });

      categoryFilters.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
    }

    // 3. Dedicated Trigger Button - ONLY way to unleash Antigravity
    if (triggerBtn) {
      triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        activateAntigravity();
      });
    }

    // 4. Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        resetLayout();
      });
    }

    // 5. Global drag-vs-click handling on links
    document.addEventListener('click', (e) => {
      if (isPhysicsActive) {
        const link = e.target.closest('a');
        if (link && isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }
    }, true);

    // 6. Window resize handler
    window.addEventListener('resize', handleResize);
  }

  /**
   * Handles real-time search typing
   */
  function handleSearchInput(e) {
    searchQuery = (e.target.value || '').trim().toLowerCase();
    applyFilters();
  }

  /**
   * Evaluates if a card matches the current search query and category filter
   */
  function matchesFilter(card) {
    // 1. Category check
    if (activeCategory !== 'all') {
      const cardCategories = (card.dataset.category || '').toLowerCase().split(',');
      if (!cardCategories.includes(activeCategory)) {
        return false;
      }
    }

    // 2. Search query check (title, badges, description, and tags)
    if (searchQuery) {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const badge = card.querySelector('.stack-badge')?.textContent.toLowerCase() || '';
      const desc = card.querySelector('.card-desc')?.textContent.toLowerCase() || '';
      const tags = Array.from(card.querySelectorAll('.tech-tag')).map(t => t.textContent.toLowerCase()).join(' ');

      const combinedText = `${title} ${badge} ${desc} ${tags}`;
      if (!combinedText.includes(searchQuery)) {
        return false;
      }
    }

    return true;
  }

  /**
   * Applies the search & category filter rules:
   * - Before Antigravity: toggles display: none / block so layout re-flows smoothly.
   * - After Antigravity: dims/fades non-matching elements without breaking Matter.js collision world.
   */
  function applyFilters() {
    cards.forEach((card) => {
      const isMatch = matchesFilter(card);

      if (!isPhysicsActive) {
        // Static CSS grid mode: hide/show gracefully
        if (isMatch) {
          card.style.display = '';
          card.classList.remove('card-filtered-out');
        } else {
          card.style.display = 'none';
          card.classList.add('card-filtered-out');
        }
      } else {
        // Physics mode: keep body in world, adjust opacity & interaction
        if (isMatch) {
          card.classList.remove('card-filtered-out');
          card.style.pointerEvents = 'auto';
        } else {
          card.classList.add('card-filtered-out');
          card.style.pointerEvents = 'none';
        }
      }
    });
  }

  /**
   * Creates static walls enclosing the viewport
   */
  function createBoundaryWalls() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const thickness = 120; // Thick walls prevent tunneling

    // Floor, ceiling, left wall, right wall
    const floor = Bodies.rectangle(w / 2, h + thickness / 2, w * 2, thickness, {
      isStatic: true,
      restitution: 0.7,
      friction: 0.15
    });

    const ceiling = Bodies.rectangle(w / 2, -thickness / 2, w * 2, thickness, {
      isStatic: true,
      restitution: 0.7,
      friction: 0.15
    });

    const leftWall = Bodies.rectangle(-thickness / 2, h / 2, thickness, h * 2, {
      isStatic: true,
      restitution: 0.7,
      friction: 0.15
    });

    const rightWall = Bodies.rectangle(w + thickness / 2, h / 2, thickness, h * 2, {
      isStatic: true,
      restitution: 0.7,
      friction: 0.15
    });

    return [floor, ceiling, leftWall, rightWall];
  }

  /**
   * Activates the 2D physics simulation for visible elements
   */
  function activateAntigravity() {
    if (isPhysicsActive) return;
    isPhysicsActive = true;

    document.body.classList.add('physics-active');
    if (resetBtn) resetBtn.classList.remove('hidden');

    // 1. Initialize Matter Engine & Runner
    engine = Engine.create({
      gravity: {
        x: 0,
        y: 0.98, // Downward realistic gravity
        scale: 0.001
      }
    });

    runner = Runner.create();

    // 2. Add boundary walls
    wallBodies = createBoundaryWalls();
    Composite.add(engine.world, wallBodies);

    // 3. Find candidate elements to turn into physics bodies.
    // Physics Compatibility: Only convert elements that are currently visible!
    const allPhysicsEls = document.querySelectorAll('.physics-element');
    trackedElements = [];

    const elementsData = [];
    allPhysicsEls.forEach((el) => {
      // If element is hidden (e.g. filtered out by search before triggering), skip physics body creation
      if (el.offsetParent === null && el.style.display === 'none') {
        return;
      }

      const rect = el.getBoundingClientRect();
      elementsData.push({
        el: el,
        rect: rect,
        isCard: el.classList.contains('card'),
        originalStyle: {
          position: el.style.position || '',
          left: el.style.left || '',
          top: el.style.top || '',
          width: el.style.width || '',
          height: el.style.height || '',
          transform: el.style.transform || '',
          zIndex: el.style.zIndex || '',
          display: el.style.display || ''
        }
      });
    });

    // 4. Create dynamic rigid bodies for each captured element
    elementsData.forEach(({ el, rect, originalStyle, isCard }) => {
      const width = rect.width;
      const height = rect.height;
      const centerX = rect.left + width / 2;
      const centerY = rect.top + height / 2;

      // Matter.js rigid rectangle body
      const body = Bodies.rectangle(centerX, centerY, width, height, {
        restitution: 0.65, // Bouncy feel
        friction: 0.1,
        frictionAir: 0.012, // Subtle air resistance
        density: 0.002
      });

      // Add randomized angular and linear impulse for dynamic tumbling
      const randomImpulseX = (Math.random() - 0.5) * 4;
      const randomImpulseY = -(Math.random() * 2 + 1);
      const randomTorque = (Math.random() - 0.5) * 0.03;

      Body.setVelocity(body, { x: randomImpulseX, y: randomImpulseY });
      Body.setAngularVelocity(body, randomTorque);

      // Lock fixed dimensions and switch to fixed layout
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.left = `0px`;
      el.style.top = `0px`;
      el.classList.add('physics-body-active');

      Composite.add(engine.world, body);

      trackedElements.push({
        domElement: el,
        body: body,
        rect: rect,
        width: width,
        height: height,
        originalStyle: originalStyle,
        isCard: isCard
      });
    });

    // 5. Setup Mouse & Drag-and-Drop Toss Controls
    const mouse = Mouse.create(document.body);
    
    // MouseConstraint connects cursor to Matter.js bodies
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(engine.world, mouseConstraint);

    // Track dragging to distinguish deliberate click on links from tossing
    Events.on(mouseConstraint, 'startdrag', (e) => {
      dragStartTime = Date.now();
      dragStartPos = { x: e.mouse.position.x, y: e.mouse.position.y };
      isDragging = false;
    });

    Events.on(mouseConstraint, 'mousemove', (e) => {
      if (mouseConstraint.body) {
        const dx = e.mouse.position.x - dragStartPos.x;
        const dy = e.mouse.position.y - dragStartPos.y;
        if (Math.hypot(dx, dy) > 6) {
          isDragging = true;
        }
      }
    });

    Events.on(mouseConstraint, 'enddrag', () => {
      setTimeout(() => {
        isDragging = false;
      }, 50);
    });

    // 6. Start Physics Runner
    Runner.run(runner, engine);

    // 7. Start Render Sync Loop
    syncLoop();
  }

  /**
   * Synchronizes Matter.js rigid bodies with DOM CSS transforms
   */
  function syncLoop() {
    if (!isPhysicsActive) return;

    for (let i = 0; i < trackedElements.length; i++) {
      const item = trackedElements[i];
      const { body, domElement, width, height } = item;

      const posX = body.position.x - width / 2;
      const posY = body.position.y - height / 2;
      const angle = body.angle;

      // Use translate3d and rotate for hardware-accelerated motion
      domElement.style.transform = `translate3d(${posX.toFixed(2)}px, ${posY.toFixed(2)}px, 0px) rotate(${angle.toFixed(4)}rad)`;
    }

    animFrameId = requestAnimationFrame(syncLoop);
  }

  /**
   * Smoothly restores the original static grid/flex layout
   */
  function resetLayout() {
    if (!isPhysicsActive) return;

    // 1. Stop Render and Physics Loops
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }

    if (runner) {
      Runner.stop(runner);
      runner = null;
    }

    if (engine) {
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      engine = null;
    }

    // 2. Revert DOM Elements to initial inline/CSS styles
    trackedElements.forEach(({ domElement, originalStyle }) => {
      domElement.classList.remove('physics-body-active');
      domElement.style.position = originalStyle.position;
      domElement.style.left = originalStyle.left;
      domElement.style.top = originalStyle.top;
      domElement.style.width = originalStyle.width;
      domElement.style.height = originalStyle.height;
      domElement.style.transform = originalStyle.transform;
      domElement.style.zIndex = originalStyle.zIndex;
      domElement.style.display = originalStyle.display;
    });

    trackedElements = [];
    wallBodies = [];
    isPhysicsActive = false;

    document.body.classList.remove('physics-active');
    if (resetBtn) resetBtn.classList.add('hidden');

    // Re-apply current search/filter state cleanly to standard grid
    applyFilters();
  }

  /**
   * Handles viewport resize dynamically
   */
  function handleResize() {
    if (!isPhysicsActive || !engine) return;

    // Remove old wall bodies and create updated ones matching new dimensions
    Composite.remove(engine.world, wallBodies);
    wallBodies = createBoundaryWalls();
    Composite.add(engine.world, wallBodies);
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initListeners);
  } else {
    initListeners();
  }

})();
