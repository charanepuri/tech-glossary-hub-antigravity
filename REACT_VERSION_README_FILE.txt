# 📚 Tech Glossary Hub (React)

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JSON](https://img.shields.io/badge/Data-JSON-000000?style=for-the-badge&logo=json&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-28A745?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern React-based technical glossary application for exploring programming concepts, technologies, definitions, examples, related terms, and developer resources through a clean dark-themed interface.**

</div>

---

## 🚀 Overview

**Tech Glossary Hub (React)** is a developer-focused glossary application built with **React** and **Vite**.

The project provides an organized collection of technical terms across multiple programming languages, frameworks, libraries, and technologies. It is designed to make technical concepts easier to discover, understand, and reference.

The application uses a **dark theme by default**, reusable React components, React Router navigation, JSON-based data, local storage for favorites, responsive layouts, search, filtering, sorting, and related-term navigation.

Tech Glossary Hub is also part of a broader project evolution that includes **HTML, Django, Angular, Flask, and React versions**.

---

## ✨ Features

- 🌙 Dark Theme by Default
- ⚛️ React + Vite
- 🧭 React Router Navigation
- 📱 Responsive Application Layout
- 🧩 Reusable React Components
- 📂 Organized Project Structure
- 📦 JSON-Based Data Architecture
- 🔎 Glossary Search
- 🗂️ Category-Based Organization
- 🎯 Category Details
- 📖 Detailed Term Pages
- 🔤 Filtering & Sorting
- ⭐ Favorite Terms
- 💾 Local Storage Persistence
- 🔗 Related Terms
- ℹ️ About Page
- 📬 Contact Page
- 🔄 Project Versions Page
- ⚠️ 404 & Error Handling
- 🧱 Reusable Layout Components
- 🚀 Production Build Support

---

## 🛠️ Tech Stack

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| React 19           | Frontend Framework          |
| Vite 7             | Build Tool                  |
| JavaScript ES6+    | Programming Language        |
| React Router DOM 7 | Routing & Navigation        |
| CSS3               | Styling & Responsive Design |
| React Icons        | UI Icons                    |
| JSON               | Glossary Data               |
| Local Storage      | Favorite Persistence        |
| Git                | Version Control             |
| GitHub             | Source Code Management      |
| Vercel             | Deployment                  |

---

## 📁 Project Structure

```text
tech-glossary-hub-react/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/
│   │   │
│   │   ├── category/
│   │   │   ├── CategoryCard.css
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── CategoryHeader.css
│   │   │   ├── CategoryHeader.jsx
│   │   │   ├── CategoryTermCard.css
│   │   │   └── CategoryTermCard.jsx
│   │   │
│   │   ├── common/
│   │   │   ├── Container.css
│   │   │   ├── Container.jsx
│   │   │   ├── EmptyState.css
│   │   │   └── EmptyState.jsx
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactInfo.css
│   │   │   └── ContactInfo.jsx
│   │   │
│   │   ├── favorites/
│   │   │   ├── FavoriteButton.css
│   │   │   ├── FavoriteButton.jsx
│   │   │   ├── FavoriteCard.css
│   │   │   └── FavoriteCard.jsx
│   │   │
│   │   ├── glossary/
│   │   │   ├── GlossaryCard.css
│   │   │   ├── GlossaryCard.jsx
│   │   │   ├── GlossaryControls.css
│   │   │   ├── GlossaryControls.jsx
│   │   │   ├── RelatedTerms.css
│   │   │   ├── RelatedTerms.jsx
│   │   │   ├── TermContent.css
│   │   │   ├── TermContent.jsx
│   │   │   ├── TermHeader.css
│   │   │   ├── TermHeader.jsx
│   │   │   ├── TermTags.css
│   │   │   └── TermTags.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── CallToAction.css
│   │   │   ├── CallToAction.jsx
│   │   │   ├── FeaturedCategories.css
│   │   │   ├── FeaturedCategories.jsx
│   │   │   ├── FeaturedTerms.css
│   │   │   ├── FeaturedTerms.jsx
│   │   │   ├── Hero.css
│   │   │   ├── Hero.jsx
│   │   │   ├── SearchSection.css
│   │   │   ├── SearchSection.jsx
│   │   │   ├── StatsSection.css
│   │   │   └── StatsSection.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.css
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.css
│   │   │   ├── Layout.jsx
│   │   │   ├── Logo.css
│   │   │   ├── Logo.jsx
│   │   │   ├── Navbar.css
│   │   │   └── Navbar.jsx
│   │   │
│   │   └── search/
│   │       ├── SearchBar.css
│   │       ├── SearchBar.jsx
│   │       ├── SearchResults.css
│   │       └── SearchResults.jsx
│   │
│   ├── context/
│   │   └── FavoritesContext.jsx
│   │
│   ├── data/
│   │   ├── categories.json
│   │   ├── css.json
│   │   ├── glossaryData.js
│   │   ├── html.json
│   │   ├── javascript.json
│   │   ├── next.json
│   │   ├── node.json
│   │   ├── python.json
│   │   ├── react.json
│   │   ├── tailwindcss.json
│   │   ├── typescript.json
│   │   └── vue.json
│   │
│   ├── hooks/
│   │   ├── useGlossaryFilters.js
│   │   └── useGlossarySearch.js
│   │
│   ├── pages/
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Categories.css
│   │   ├── Categories.jsx
│   │   ├── CategoryDetails.css
│   │   ├── CategoryDetails.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Favorites.css
│   │   ├── Favorites.jsx
│   │   ├── Glossary.css
│   │   ├── Glossary.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.css
│   │   ├── NotFound.jsx
│   │   ├── Search.css
│   │   ├── Search.jsx
│   │   ├── TermDetails.css
│   │   ├── TermDetails.jsx
│   │   ├── Versions.css
│   │   └── Versions.jsx
│   │
│   ├── routes/
│   │   └── AppRouter.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── utils/
│   │   └── relatedTerms.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/charanepuri/tech-glossary-hub-react.git
```

### 2. Navigate to the Project

```bash
cd tech-glossary-hub-react
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available through the local Vite development server.

---

## 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
                    React Application
                           │
                           ▼
                     App.jsx
                           │
                           ▼
                   AppRouter.jsx
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
          Pages                      Layout
              │                         │
      ┌───────┴───────┐          ┌──────┴──────┐
      ▼               ▼          ▼             ▼
   Components      Data       Navbar         Footer
      │               │
      ▼               ▼
   Reusable        JSON Files
   UI Components
      │
      ▼
   Context / Hooks / Utils
```

---

## 📊 Data Architecture

The glossary uses JSON-based data files for storing technical terms.

Example structure:

```json
{
  "terms": [
    {
      "id": 1,
      "title": "Example Term",
      "slug": "example-term",
      "categoryId": "javascript",
      "difficulty": "Beginner",
      "definition": "A beginner-friendly definition.",
      "explanation": "A detailed explanation of the concept.",
      "example": "Example usage.",
      "tags": ["example", "programming"],
      "relatedTerms": [2, 3]
    }
  ]
}
```

The centralized glossary data module:

```text
src/data/glossaryData.js
```

combines the individual technology datasets for use throughout the application.

---

## 🔍 Search

The application provides glossary search functionality through the search system.

```text
Search Query
     ↓
Search Hook
     ↓
Glossary Data
     ↓
Matching Terms
     ↓
Search Results
     ↓
Term Details
```

The search system is designed to provide quick access to relevant glossary concepts.

---

## 🗂️ Categories

Glossary content is organized into technology categories.

Current data files include:

- HTML
- CSS
- JavaScript
- React
- TypeScript
- Python
- Node.js
- Next.js
- Vue
- Tailwind CSS

Categories are maintained separately through:

```text
src/data/categories.json
```

---

## 🔤 Filtering & Sorting

The Glossary page supports filtering and sorting.

### Filters

- Category
- Difficulty

### Sorting

- Default
- Alphabetical A → Z
- Alphabetical Z → A

The filtering logic is handled through:

```text
src/hooks/useGlossaryFilters.js
```

---

## ⭐ Favorites

Users can save glossary terms as favorites.

Favorites are managed through:

```text
src/context/FavoritesContext.jsx
```

Favorite IDs are persisted using browser Local Storage.

```text
Glossary Term
     ↓
Favorite Button
     ↓
Favorites Context
     ↓
Local Storage
     ↓
Favorites Page
```

---

## 🔗 Related Terms

Glossary terms can reference other related concepts through their `relatedTerms` IDs.

The relationship is resolved through:

```text
src/utils/relatedTerms.js
```

Flow:

```text
Current Term
     ↓
relatedTerms IDs
     ↓
Glossary Dataset
     ↓
Matching Terms
     ↓
Related Terms
```

---

## 📄 Pages & Routes

| Page             | Route             | Purpose                                  |
| ---------------- | ----------------- | ---------------------------------------- |
| Home             | `/`               | Application homepage                     |
| Categories       | `/categories`     | Browse glossary categories               |
| Category Details | `/category/:slug` | View terms within a category             |
| Glossary         | `/glossary`       | Browse all glossary terms                |
| Term Details     | `/term/:slug`     | View detailed term information           |
| Search           | `/search`         | Search glossary terms                    |
| Favorites        | `/favorites`      | View saved terms                         |
| About            | `/about`          | Project and developer information        |
| Versions         | `/versions`       | Explore other Tech Glossary Hub versions |
| Contact          | `/contact`        | Developer contact information            |
| Not Found        | `*`               | Invalid route handling                   |

---

## 🔄 Project Versions

Tech Glossary Hub has been developed across multiple technologies and frameworks.

### ⚛️ React JS — Current Version

**GitHub Repository:**  
https://github.com/charanepuri/tech-glossary-hub-react

**Live Project:**  
https://tech-glossary-hub-react.vercel.app/

### 🌐 HTML Version

**GitHub Repository:**  
https://github.com/charanepuri/tech-glossary-hub-html

**Live Project:**  
https://charanepuri.github.io/tech-glossary-hub-html/

### 🐍 Django Version

**GitHub Repository:**  
https://github.com/charanepuri/tech-glossary-hub

**Live Project:**  
https://tech-glossary-hub.onrender.com/

> This Django version may not load in the preview here. Please visit the live project link provided to open it directly.

### 🅰️ Angular Version

**GitHub Repository:**  
https://github.com/charanepuri/tech-glossary-hub-angular

**Live Project:**  
https://tech-glossary-hub-angular.vercel.app/home

### 🐍 Flask Version

**GitHub Repository:**  
https://github.com/charanepuri/tech-glossary-hub-flask

**Live Project:**  
To be added after deployment.

---

## ✨ Project Highlights

- Modern React architecture
- Component-based development
- Reusable UI components
- JSON-driven glossary content
- Searchable technical knowledge base
- Category-based organization
- Filtering and sorting
- Persistent favorites
- Related-term navigation
- Responsive design
- Dark theme by default
- Error handling
- Multiple project versions
- Production-ready Vite build

---

## 🎯 Project Goals

- Build a modern developer glossary
- Organize programming concepts by technology
- Provide beginner-friendly technical explanations
- Make technical concepts easy to search and reference
- Practice reusable React component architecture
- Practice React Router navigation
- Work with JSON-based application data
- Implement persistent client-side state
- Build responsive interfaces
- Maintain a scalable project structure
- Explore the same project across multiple technologies

---

## 🧪 Testing

Before deployment, the application is tested across:

- Route navigation
- Navbar navigation
- Footer links
- Category navigation
- Glossary rendering
- Search functionality
- Filtering
- Sorting
- Term details
- Related terms
- Favorites
- Local Storage persistence
- About page
- Versions page
- Contact page
- 404 handling
- Responsive layouts
- Dark theme
- Production build

Production build:

```bash
npm run build
```

Production preview:

```bash
npm run preview
```

---

## 📈 Development Roadmap

- ✅ Phase 1 — Project Setup
- ✅ Phase 2 — Application Layout
- ✅ Phase 3 — Home Page
- ✅ Phase 4 — Categories
- ✅ Phase 5 — Category Details
- ✅ Phase 6 — Glossary
- ✅ Phase 7 — Term Details
- ✅ Phase 8 — Search
- ✅ Phase 9 — Filters & Sorting
- ✅ Phase 10 — Favorites
- ✅ Phase 11 — Related Terms
- ✅ Phase 12 — About & Contact
- ✅ Phase 13 — Error Handling
- ✅ Phase 14 — Responsive Design
- ✅ Phase 15 — Performance Optimization
- 🚧 Phase 16 — Testing & Bug Fixes
- ⏳ Phase 17 — Deployment
- ⏳ Phase 18 — Documentation

---

## 📚 Technologies Covered

The project currently contains glossary data covering technologies including:

- HTML
- CSS
- JavaScript
- React
- TypeScript
- Python
- Node.js
- Next.js
- Vue
- Tailwind CSS

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Commit your changes
6. Push to your branch
7. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

### Epuri Charan Teja

**Aspiring Full Stack Developer**

Passionate about building practical web applications and continuously learning modern technologies across frontend and backend development.

### Connect

- GitHub: https://github.com/charanepuri
- LinkedIn: https://www.linkedin.com/in/charan-teja-972aa9231

### Explore Portfolios

- Django Portfolio: https://portfolio-site-django.onrender.com
- React Portfolio: https://charan-react-portfolio.vercel.app
- Flask Portfolio: https://flask-developer-dashboard-portfolio.onrender.com/
- Angular Portfolio: https://angular-portfolio-sigma-eight.vercel.app/

---

## 🔗 Project Links

**GitHub Repository**

https://github.com/charanepuri/tech-glossary-hub-react

**Live Demo**

https://tech-glossary-hub-react.vercel.app/

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

**Built with ❤️ by Epuri Charan Teja**

</div>
