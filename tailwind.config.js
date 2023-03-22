/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary_white: '#dadada',
      },
      fontFamily: {
        serif: 'Museta, ui-serif, Georgia, serif',
        mono: 'Iosevka, ui-monospace, Menlo, Monaco, "Segoe UI Mono", "Roboto Mono", monospace',
        sans: 'Neue Haas, system-ui, -apple-system, sans-serif',
      },
    },
  },
  plugins: [],
};
