# Hello World MAS - Design Documentation

## Design Overview

This project implements a modern, glassmorphism-based "Hello World" application following Material Design 3 principles with a playful, clean aesthetic.

## Visual Design

### Color Palette
- **Primary**: `#6366f1` (Indigo) - Used for the toggle button
- **Primary Hover**: `#4f46e5` (Darker indigo) - Button hover state
- **Text Primary**: `#1e293b` (Slate 800) - Main greeting text
- **Text Secondary**: `#64748b` (Slate 500) - Subtitle
- **Background Gradient**: `#667eea` → `#764ba2` (Purple to indigo animated gradient)

### Typography
- **Font Family**: Segoe UI, system-ui, -apple-system, sans-serif
- **Greeting**: 3.5rem, bold, letter-spacing -0.02em
- **Subtitle**: 1.25rem, regular weight

### Glassmorphism Effect
- **Background**: `rgba(255, 255, 255, 0.15)` - Semi-transparent white
- **Border**: `rgba(255, 255, 255, 0.2)` - Subtle white border
- **Blur**: 12px backdrop blur
- **Shadow**: `0 8px 32px rgba(0, 0, 0, 0.1)` - Soft shadow

### Animations
1. **Page Load**: Card fades in with upward slide and scale (0.8s)
2. **Background**: Continuous subtle gradient animation (15s loop)
3. **Button Hover**: Lift with enhanced shadow + icon rotation
4. **Button Click**: Ripple effect

## Responsive Breakpoints
- **Desktop**: > 768px - Full layout
- **Tablet**: 768px - Reduced padding, smaller typography
- **Mobile**: 480px - Compact spacing, minimum viable sizes

## Accessibility Features
- Reduced motion media query support
- High contrast mode support
- Fallback for browsers without backdrop-filter
- Focus states on interactive elements
- Semantic HTML structure

## Components

### Glass Card
- Centered on viewport
- Max-width 480px
- 24px border radius
- Contains greeting, subtitle, and button

### Toggle Button
- Pill-shaped (full radius)
- Indigo background with shadow
- Animated icon on hover
- Ripple effect on click

## Browser Support
- Modern browsers with backdrop-filter (Chrome, Firefox, Safari, Edge)
- Fallback solid background for older browsers
- CSS custom properties with CSS variables
