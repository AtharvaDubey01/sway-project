# SWAY - Philosophy Website 🌿

[Live Demo 🚀](https://sway-project.vercel.app)

SWAY is a modern, responsive web project showcasing a clean, health-oriented beverage brand philosophy. The site emphasizes three key principles: **Natural Ingredients**, **Zero Sugar**, and **Sustainable Packaging** — visually supported by hover-reactive imagery.

---

## 🧠 Features

- ✨ Clean and modern UI
- 🖼️ Image hover effects (black & white to color)
- 📱 Fully responsive (mobile-friendly)
- ♻️ Sustainable brand-focused layout
- 🚀 Hosted on Vercel

---

## 🔧 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript** (if used)
- **React** (if applicable)
- **Vercel** (for deployment)

---

## 📁 Folder Structure

/public
└── images/ # All static image assets
/src
└── components/ # Reusable UI components
└── App.js # Main application component
└── index.css # Global styles (includes hover effects)
└── index.js # Entry point

## 🖼️ Image Hover Effect

All images in the "Philosophy" section use this CSS:

```css
.image-hover-effect {
  filter: grayscale(100%);
  transition: filter 0.4s ease-in-out;
  border-radius: 12px;
}

.image-hover-effect:hover {
  filter: grayscale(0%);
}
🚀 Getting Started (Local Setup)
Clone the repository

git clone https://github.com/your-username/sway-project.git
cd sway-project
Install dependencies (if React is used)

npm install
Run the app locally

npm start
📦 Deployment
Deployed using Vercel:

Connect the GitHub repo

Select project root

Choose build command (npm run build) and output directory (dist or build)

Deploy 🎉

🧑‍💻 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

📜 License
MIT

👤 Author
Atharva Dubey
