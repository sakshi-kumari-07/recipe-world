# 🍳 RecipeHub

A modern community-driven recipe sharing platform built with **React and Vite**.

RecipeHub allows users to discover recipes, explore different cuisines, save their favorite recipes, view detailed cooking instructions, and share their own recipes with the community.

---

## 🌐 Project Overview

RecipeHub is designed as a community recipe platform where food lovers can:

- Discover new recipes
- Search for recipes
- Browse recipes by category
- Filter recipes by type
- View complete recipe details
- Save favorite recipes
- Share their own recipes
- View their recipe profile

The project currently uses local dummy data and is structured so that a backend API can be integrated in the future.

---

## ✨ Features

### 🏠 Home Page

- Modern hero section
- Recipe search
- Popular recipe categories
- Trending recipes
- Community statistics
- Recipe sharing call-to-action

### 🔎 Recipe Explorer

Users can:

- Search recipes
- Filter by category
- Filter by Veg / Non-Veg
- View available recipes
- Open individual recipe details

### 📖 Recipe Details

Each recipe contains:

- Recipe name
- Recipe image
- Description
- Author
- Category
- Veg / Non-Veg type
- Cooking time
- Difficulty
- Rating
- Ingredients
- Step-by-step instructions

### ❤️ Favorites

Users can save recipes they like and view them from their personal favorites collection.

### ➕ Add Recipe

Users can create and publish their own recipes by providing:

- Recipe name
- Description
- Category
- Food type
- Cooking time
- Difficulty
- Ingredients
- Cooking instructions

### 👤 Profile

The profile page displays:

- Recipes shared
- Saved recipes
- Average rating
- User's recipes

### 📱 Responsive Design

The application is designed to work across:

- Desktop
- Tablet
- Mobile

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- React Router
- Lucide React
- HTML5
- CSS3

### Development Tools

- Visual Studio Code
- npm
- Git
- GitHub

---

## 📂 Project Structure

```text
recipehub-react/
│
├── public/
│   └── images/
│       ├── hero-food.svg
│       ├── butter-chicken.svg
│       ├── pasta.svg
│       ├── bowl.svg
│       ├── cake.svg
│       ├── salad.svg
│       ├── pizza.svg
│       └── category images
│
├── src/
│   ├── data/
│   │   └── recipes.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
