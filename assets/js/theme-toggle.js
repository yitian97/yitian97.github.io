/**
 * Theme Toggle Functionality
 * Handles switching between light and dark themes
 */

(function() {
  'use strict';

  // Get theme from localStorage or default to light
  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  // Set theme
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
  }

  // Toggle theme
  function toggleTheme() {
    try {
      const currentTheme = getTheme();
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      console.log('Theme toggled to:', newTheme);
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  }

  // Initialize on DOM ready
  function init() {
    initTheme();
    
    // Make toggleTheme available globally
    window.toggleTheme = toggleTheme;
    
    // Also add event listeners to all theme toggle buttons as fallback
    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        toggleTheme();
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
