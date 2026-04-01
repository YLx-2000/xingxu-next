/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.06)',
        glow: '0 18px 70px rgba(14, 116, 244, 0.10)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(135deg,#ffffff 0%,#f5faff 52%,#eef6ff 100%)',
      },
    },
  },
  plugins: [],
};
