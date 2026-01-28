<div align="center">

# 🌟 Modern Portfolio Website

[![Development Status](https://img.shields.io/badge/Status-🚧%20In%20Development-yellow?style=for-the-badge)]()
[![Progress](https://img.shields.io/badge/Progress-75%25-orange?style=for-the-badge)]()
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

**A sleek, responsive personal portfolio website built with modern web technologies featuring glass-morphism design and smooth animations.**

> ⚠️ **Note**: This project is currently under active development. Some features may be incomplete or subject to change.

[🚀 Live Demo](#) • [📖 Documentation](#-sections) • [⚙️ Setup Guide](#-getting-started)

</div>

---

## 🚀 Features

- ✨ **Modern Glass-morphism Design** - Contemporary UI with blur effects and transparency
- 🎨 **Animated Background** - Dynamic gradient halos with floating animations
- ⌨️ **Typewriter Effect** - Interactive text animation for name display
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🎯 **Smooth Scrolling** - CSS scroll-snap for seamless navigation
- 💼 **Interactive Skills Section** - Tabbed interface with hover effects
- 📧 **Contact Form** - Integrated with Formspree for message handling
- 📋 **Copy to Clipboard** - Click to copy contact information
- 🔗 **Social Links** - Direct links to professional profiles

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | Functionality | External Services |
|----------|---------|---------------|------------------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![Formspree](https://img.shields.io/badge/Formspree-FF6B6B?style=flat-square&logo=formspree&logoColor=white) |
| Semantic HTML5 | Modern CSS3 | Vanilla JavaScript | Contact Form Handler |
| Accessibility | Glass-morphism | Interactive Animations | Email Integration |

</div>

## 📁 Project Structure

```bash
My Portfolio/
├── 📄 index.html          # Main HTML structure
├── 🎨 style.css           # Styles & animations
├── ⚡ script.js           # Interactive functionality
├── 📖 README.md           # Documentation
└── 📁 images/             # Static assets
    ├── 📁 logos/          # Brand logos
    ├── 📁 profile/        # Profile pictures
    └── 📁 projects/       # Project screenshots
```

### 📊 File Overview

| File | Size | Purpose | Key Features |
|------|------|---------|-------------|
| `index.html` | ~15KB | Structure | Semantic markup, accessibility |
| `style.css` | ~25KB | Styling | Glass-morphism, animations, responsive |
| `script.js` | ~8KB | Functionality | Typewriter, form handling, interactions |

## 🎯 Sections

### 🏠 Hero Section
- Animated gradient background
- Large typography with brand name
- Floating halo animations

### 👤 About Section
- Personal introduction
- Profile image with 3D tilt effect
- Education timeline
- Work experience with expandable details

### 💻 Skills Section
- Interactive skill categories:
  - 🌐 Frontend
  - ⚙️ Backend
  - 🚀 DevOps
  - 🛠️ Tools
- Dynamic skill cards with icons

### 📂 Projects Section
- Grid layout for project showcase
- Responsive design for various screen sizes

### 📞 Contact Section
- Contact form with validation
- Social media integration
- Copy-to-clipboard functionality

## 🚀 Getting Started

### 📋 Prerequisites

- 🌐 **Modern Web Browser** (Chrome 88+, Firefox 84+, Safari 14+, Edge 88+)
- 💻 **Code Editor** ([VS Code](https://code.visualstudio.com/) recommended)
- 🔧 **Live Server** (for development)

### ⚡ Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# 2. Open with Live Server (VS Code)
# Install Live Server extension, then right-click index.html → "Open with Live Server"

# 3. Or open directly in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## ⚙️ Configuration

### 📧 Contact Form Setup

1. **Create Formspree Account**
   - Visit [Formspree.io](https://formspree.io/)
   - Sign up for free account
   - Create new form

2. **Update Form Action**
   ```html
   <!-- In index.html, line ~XXX -->
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

3. **Test Form Submission**
   - Submit test message
   - Verify email delivery

### 🎨 Customization Guide

<details>
<summary><strong>🎯 Personal Information</strong></summary>

```html
<!-- Update in index.html -->
<h2 class="name" id="typewriter">Your Name</h2>
<span class="contact-value">your.email@domain.com</span>
<span class="contact-value">+1 234 567 8900</span>
```
</details>

<details>
<summary><strong>🌈 Color Scheme</strong></summary>

```css
/* Add to style.css */
:root {
  --primary-purple: #7c3aed;
  --primary-blue: #2563eb;
  --accent-color: #10b981;
  --text-primary: #ffffff;
  --text-secondary: #d1d5db;
}
```
</details>

<details>
<summary><strong>💼 Skills & Technologies</strong></summary>

```javascript
// Update skillsData array in script.js
const skillsData = [
  { id: 1, name: 'React', category: 'frontend', icon: 'icon-url' },
  // Add your skills here
];
```
</details>

## 📱 Responsive Design

<div align="center">

| Device Type | Screen Size | Breakpoint | Layout | Optimization |
|-------------|-------------|------------|--------|--------------|
| 📱 **Mobile** | 320px - 767px | `< 768px` | Single column | Touch-friendly, stacked sections |
| 💻 **Desktop** | 768px+ | `> 768px` | Multi-column grid | Hover effects, side-by-side layout |
| 🖥️ **Large Desktop** | 1200px+ | `> 1200px` | Expanded grid | Maximum content width, enhanced spacing |

</div>

### 📐 Responsive Features
- ✅ **Fluid Typography** - Scales with viewport
- ✅ **Flexible Images** - Auto-resize with containers
- ✅ **Touch Gestures** - Mobile-optimized interactions
- ✅ **Performance** - Optimized for all devices

## 🎨 Design System

### 🌟 Visual Effects

| Effect | Implementation | Purpose |
|--------|----------------|----------|
| **Glass-morphism** | `backdrop-filter: blur(10px)` | Modern, translucent UI elements |
| **Gradient Halos** | Multi-layered radial gradients | Dynamic background animations |
| **3D Transforms** | `perspective()` & `rotateX/Y()` | Interactive profile image |
| **Smooth Transitions** | CSS `transition` & `@keyframes` | Fluid user interactions |

## 📈 Performance & Optimization

### ⚡ Performance Metrics

| Metric | Score | Optimization |
|--------|-------|-------------|
| **First Contentful Paint** | < 1.5s | Optimized CSS loading |
| **Largest Contentful Paint** | < 2.5s | Image compression |
| **Cumulative Layout Shift** | < 0.1 | Proper image dimensions |
| **Time to Interactive** | < 3.0s | Minimal JavaScript |

### 🚀 Optimization Techniques

- ⚡ **CSS Optimization**
  - Efficient selectors and properties
  - `will-change` for animated elements
  - Critical CSS inlined

- 🖼️ **Asset Optimization**
  - Compressed images (WebP format recommended)
  - SVG icons for scalability
  - Lazy loading for non-critical images

- 🎯 **JavaScript Efficiency**
  - Vanilla JS (no framework overhead)
  - Event delegation
  - Debounced scroll handlers

- 📦 **External Resources**
  - Google Fonts with `font-display: swap`
  - DevIcons CDN for skill icons
  - Formspree for form handling

## 🙏 Acknowledgments

<div align="center">

### 🛠️ Built With Amazing Tools

| Resource | Purpose | Link |
|----------|---------|------|
| 🎨 **DevIcons** | Technology skill icons | [devicons.github.io](https://devicons.github.io/devicon/) |
| 🔤 **Google Fonts** | Typography (Space Grotesk, Inter) | [fonts.google.com](https://fonts.google.com/) |
| 📧 **Formspree** | Contact form backend | [formspree.io](https://formspree.io/) |
| 🎭 **CSS Tricks** | Glass-morphism inspiration | [css-tricks.com](https://css-tricks.com/) |

</div>

## 👨‍💻 Author

**Piyush Kumar**  
🚀Full Stack Developer | ☁️Cloud & DevOps | 🟢Android Developer

<h3 align="center">📬 Let's Connect</h3>

<p align="center">
  <a href="https://my-portfolio-umber-zeta-11.vercel.app/" target="_blank">🌐 Portfolio</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/mr-piyushkr" target="_blank">💻 GitHub</a>
  &nbsp;•&nbsp;
  <a href="https://linkedin.com/in/piyushkumar06" target="_blank">💼 LinkedIn</a>
  &nbsp;•&nbsp;
  <a href="mailto:0602.piyushkumar@gmail.com">📧 Email</a>
</p>