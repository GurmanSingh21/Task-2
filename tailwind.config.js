// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-secondary': '0 8px 12px rgba(34, 197, 94, 0.5)', // secondary color shadow (adjust opacity if needed)
      },
      colors: {
        primary: '#FFD700',  // Golden color for call-to-action buttons
        secondary: '#5FE26C', // Green for food and health association
        accent: '#FF5722',    // Accent color for important elements (like prices)
        background: '#F9F9F9', // Light background for the site
        textPrimary: '#000000', // Dark grey for the primary text
        textSecondary: '#4A4A4A',
        card: '#90BD95', // Lighter grey for secondary text (descriptions, etc.)
        iconBg: '#CCF8D1',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],  // Modern, clean font for headings
        body: ['Roboto', 'sans-serif'],      // Readable font for body text
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  plugins: [],
}
