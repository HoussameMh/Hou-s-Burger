# 🍔 Hou's Burger

![HTML5](https://img.shields.io/badge/Frontend-HTML5-E34F26?logo=html5)
![CSS3](https://img.shields.io/badge/Styling-CSS3-1572B6?logo=css3)
![JavaScript](https://img.shields.io/badge/Logic-Vanilla%20JS-F7DF1E?logo=javascript)

Welcome to **Hou's Burger**, a fun, interactive front-end web application built entirely with vanilla web technologies (HTML, CSS, and JavaScript). The platform offers a restaurant landing page, an interactive custom burger builder, and even an embedded mini-game!

🔗 **Live Deployment**: [Hou's Burger on Vercel](https://hou-s-burger.vercel.app/)

---

## 📑 Table of Contents
- [Features](#-features)
- [Project Architecture](#-project-architecture)
- [Installation & Setup](#-installation--setup)
- [Technologies Used](#-technologies-used)

---

## ✨ Features

- **🍔 Landing & Menu (`index.html`)**: A clean and responsive landing page showcasing the restaurant's top burgers and menu items.
- **👨‍🍳 Custom Burger Builder (`Projet.html`)**: An interactive page where users can build their own custom burgers layer by layer using various ingredients (cheese, lettuce, meat, mustard, pickles, etc.).
- **🎮 Mini-Game (`game.html`)**: A built-in browser mini-game to keep users entertained, featuring win/loss states and custom graphic assets.
- **📱 Responsive Design**: Custom CSS styling crafted to ensure a great experience across different devices.

---

## 🏗 Project Architecture

The repository is structured as a classic static web project:

```text
📦 Hou-s-Burger
 ┣ 📂 design         # CSS stylesheets for the different pages
 ┃ ┣ 📜 style.css    # Main landing page styles
 ┃ ┣ 📜 styleP.css   # Styles for the Burger Builder (Projet)
 ┃ ┗ 📜 styleG.css   # Styles for the Mini-Game
 ┣ 📂 images         # Image assets organized by usage
 ┃ ┣ 📂 Game         # Sprites and GIFs for the mini-game
 ┃ ┣ 📂 ingredients  # Assets for the interactive burger builder
 ┃ ┣ 📂 menu         # Static menu item images
 ┃ ┗ 📂 popup        # Animated GIFs for popups
 ┣ 📂 script         # Vanilla JavaScript logic
 ┃ ┣ 📜 index.js     # Landing page interactivity
 ┃ ┣ 📜 Projet.js    # Logic for the custom burger builder
 ┃ ┗ 📜 Game.js      # Game loop and mechanics
 ┣ 📜 index.html     # Homepage
 ┣ 📜 Projet.html    # Burger Builder page
 ┗ 📜 game.html      # Mini-Game page
```

---

## 🚀 Installation & Setup

Because this project is built entirely with static web files (no Node.js, no build tools, no backend), running it locally is incredibly easy!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HoussameMh/Hou-s-Burger.git
   cd Hou-s-Burger
   ```

2. **Run the Project**:
   You do not need to install any dependencies. Simply open the `index.html` file directly in any modern web browser.
   
   *Alternatively, if you use VS Code, you can right-click `index.html` and select **"Open with Live Server"** for a better development experience.*

---

## 💻 Technologies Used

- **HTML5**: Semantic structure for the pages.
- **CSS3**: Custom layouts, animations, and responsive design (no external CSS frameworks were used).
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event handling, game loop mechanics, and interactive burger building logic.
