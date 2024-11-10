/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { container: {
      center: true,
      padding: '1rem',
      boxShadow: {
        'glow': '0 0 15px 2px',
      }
    },},
  },
  plugins: [],
  mode: 'jit',
}

