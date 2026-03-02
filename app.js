// Hello World MAS - App.js
// Background color toggle functionality

(function() {
  'use strict';

  // Predefined pleasant background colors
  const backgroundColors = [
    '#f0f9ff', // Light sky blue
    '#faf5ff', // Light lavender
    '#fafafa', // Light gray
    '#fef3c7', // Light amber
    '#ecfeff', // Light cyan
    '#f0fdf4', // Light green
    '#fff1f2'  // Light rose
  ];

  // Get the toggle button
  const toggleBtn = document.getElementById('colorToggle');

  // Function to get a random color different from the current one
  function getRandomColor() {
    const currentColor = document.body.style.backgroundColor;
    let newColor;
    
    do {
      const randomIndex = Math.floor(Math.random() * backgroundColors.length);
      newColor = backgroundColors[randomIndex];
    } while (rgbToHex(newColor) === currentColor && backgroundColors.length > 1);
    
    return newColor;
  }

  // Helper to convert hex to RGB for comparison
  function rgbToHex(hex) {
    // If it's already an rgb value, return it
    if (hex.startsWith('rgb')) return hex;
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Function to change background color
  function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.background = newColor;
  }

  // Add event listener to the button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', changeBackgroundColor);
  }

  // Expose for testing
  window.helloWorldApp = {
    changeBackgroundColor,
    getRandomColor,
    backgroundColors
  };
})();
