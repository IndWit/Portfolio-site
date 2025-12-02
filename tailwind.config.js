/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // The ** wildcard ensures it looks in 'Pages', 'components', etc.
  ],
  theme: {
    extend: {
      // We define the custom animation here so we don't need <style> tags in JSX
      keyframes: {
        slideUp: {
          'from': { transform: 'translateY(100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        slideUp: 'slideUp 0.8s ease-out',
      }
    },
  },
  plugins: [],
}