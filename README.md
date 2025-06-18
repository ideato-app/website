# Idea to App - Landing Page

A modern, animated landing page for "Idea to App" tech company in Arabic (RTL layout).

## Technologies Used

- React 19.1.0
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Vite 6.3 (for fast development)

## Features

- RTL layout for Arabic language
- Responsive design (mobile-first approach)
- Animated components with Framer Motion
- Dark mode support
- Modern UI with smooth animations
- Full React 19.1.0 compatibility

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install --legacy-peer-deps
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## React 19.1.0 Compatibility

This project has been updated to fully support React 19.1.0. Key compatibility features include:

- Using the modern `createRoot` API
- Optimized Vite configuration for React 19
- Legacy peer dependencies flag for compatibility
- Updated component lifecycle management

## Project Structure

```
├── public/assets/ # icons/images
├── src/
│ ├── components/ # reusable components
│ │ ├── Navbar.tsx
│ │ ├── HeroSection.tsx
│ │ ├── ServicesGrid.tsx
│ │ ├── ServiceCard.tsx
│ │ ├── Footer.tsx
│ │ └── DarkModeToggle.tsx
│ ├── data/services.ts # service list
│ ├── pages/Home.tsx # main page
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
```
