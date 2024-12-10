/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '60/40' : '60% 40%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'wp-dark' : '#1a1818'
      },
    },
  },
  plugins: [],
};
