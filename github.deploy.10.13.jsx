# CultureCare Online: Digital Heritage Lab

A creative, low-math, open-knowledge portfolio project for GitHub Pages.

---

## 📁 Folder Structure

```
CultureCare-Digital-Heritage-Lab/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
│       └── images/
│           └── logo.png
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── card.jsx
│   │   │   └── button.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── README.md
└── .gitignore
```

---

## 📦 `package.json`

```json
{
  "name": "culturecare-digital-heritage-lab",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://yourusername.github.io/culturecare-digital-heritage-lab",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "framer-motion": "^10.16.4",
    "lucide-react": "^0.301.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "gh-pages": "^6.1.0",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.0"
  }
}
```

---

## 🧩 Example Components

### `src/components/ui/card.jsx`
```jsx
export function Card({ children, className }) {
  return <div className={`rounded-2xl p-4 shadow-md ${className}`}>{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>
}
```

### `src/components/ui/button.jsx`
```jsx
export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-2xl font-semibold shadow-md transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

---

## 🖥️ Deployment Steps

1. **Initialize GitHub repository**  
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/culturecare-digital-heritage-lab.git
   git push -u origin main
   ```

2. **Deploy with GitHub Pages**  
   ```bash
   npm install
   npm run build
   npm run deploy
   ```

3. Access at:
   ```
   https://yourusername.github.io/culturecare-digital-heritage-lab/
   ```

---

## 🌿 Notes
- Designed with your brand colors:
  - 💚 Green `#90C53D`
  - 🩵 Teal `#058397`
  - 💙 Navy `#002E45`
- Great for showcasing your bots, open-science tools, and prompt collections.
- Low-code friendly, minimal math — focused on storytelling + presentation.

---

### ✨ Next Step
Would you like me to include sample content for the AI Reflections Journal and Resource Library to populate your demo when you deploy it?
