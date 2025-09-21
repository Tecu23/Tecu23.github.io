# Portfolio Website - Andrei-Raul Teculescu

A modern, interactive portfolio website showcasing my skills and projects as a
Full Stack Developer. Built with React, TypeScript, and Framer Motion for smooth
animations and engaging user experience.

## 🚀 Live Demo

[View Portfolio](https://tecu23.github.io)

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth scroll reveals and hover effects using
  Framer Motion
- **Mobile Navigation**: Animated hamburger menu with staggered transitions
- **Interactive Snake Game**: Playable mini-game built in React
- **Skills Showcase**: Animated grid with hover effects and carousel for mobile
- **Project Gallery**: Dynamic project display with conditional tooltips
  for WIP projects
- **Contact Integration**: Direct email functionality and social links
- **Modern UI**: Clean design with custom color scheme and gradients

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (BiLogos, SiIcons, etc.)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Tecu23/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── MobileNavbar.tsx
│   │   └── footer/
│   │       └── Footer.tsx
│   ├── sections/
│   │   ├── landing/
│   │   │   ├── LandingPage.tsx
│   │   │   └── hero/
│   │   │       ├── Hero.tsx
│   │   │       ├── Snake.tsx
│   │   │       └── SkillsCarousel.tsx
│   │   ├── about/
│   │   │   └── About.tsx
│   │   ├── skills/
│   │   │   ├── Skills.tsx
│   │   │   └── SkillsGrid.tsx
│   │   ├── projects/
│   │   │   └── Projects.tsx
│   │   └── contact/
│   │       └── Contact.tsx
│   └── shared/
│       ├── Reveal.tsx
│       └── Tooltip.tsx
├── utils/
│   ├── helpers/
│   │   └── snake.ts
│   └── types.ts
└── App.tsx
```

## 🎮 Interactive Features

### Snake Game

- **Playable mini-game** in the hero section
- **Keyboard controls** using arrow keys
- **Dynamic gradient effects** on snake segments
- **Win/lose states** with restart functionality
- **Food collection counter** with visual feedback

### Animated Components

- **Scroll-triggered reveals** with slide-in effects
- **Hover animations** on skill icons with directional clip-path effects
- **Mobile navigation** with staggered menu animations
- **Smooth scrolling** between sections

## 🎨 Design System

### Colors

- **Primary**: `#2ED573` (Green)
- **Primary Light**: `#82E6AB`
- **Primary Dark**: `#25AA5C`
- **Grey Scale**: 9-step grey palette from `#E7E8EB` to `#2F3542`
- **Error**: `#FF4B55`

### Key Features

- **Custom CSS gradients** for visual depth
- **Responsive typography** with Tailwind classes
- **Consistent spacing** using Tailwind's spacing scale
- **Hover states** and transitions throughout

## 📱 Responsive Design

- **Mobile-first approach** with progressive enhancement
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile navigation** with full-screen overlay
- **Adaptive layouts** for different screen sizes
- **Touch-friendly** interactive elements

## 🚀 Deployment

The site is deployed using GitHub Pages:

```bash
npm run build
npm run deploy
```

## 📞 Contact

- **Email**: andrei.teculescu@gmail.com
- **GitHub**: [@Tecu23](https://github.com/Tecu23)
- **Portfolio**: [Live Site](https://tecu23.github.io)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
