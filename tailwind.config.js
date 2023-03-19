/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "bg-dark": "var(--bg-dark)",
        "bg-light": "var(--bg-light)",
        "bg-tone": "var(--bg-tone)",
        "text-dark": "var(--text-dark)",
        "text-light": "var(--text-light)",
        "bg-grey": "var(--bg-grey)",
        "bg-dark-grey": "var(--bg-dark-grey)",
        "purps": "var(--purps)",
        "aqua": "var(--aqua)",
        "lime": "var(--lime)",
        "orange": "var(--orange)",
        "grassy": "var(--grassy)",
        "gradient": "var(--gradient)"
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        floating: 'floating 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floating: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 5px)' },
          '100%': { transform: 'translate(0, -0px)' },
        }
      },
      variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [],
}