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
        '40/60' : '40% 60%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'wp-dark' : '#292828',
        'accentOrange' : '#ff8a65'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito' : ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        'neumorphism': '8px 8px 16px #1a1a1a, -8px -8px 16px #3c3c3c',
        'neumorphism-dark': '6px 6px 10px rgba(0, 0, 0, 0.2), -6px -6px 10px rgba(255, 255, 255, 0.7)',
        'neumorphicHover': '12px 12px 24px #1a1a1a, -12px -12px 24px #3c3c3c',
        'neumorphicPressed': "inset 8px 8px 16px #1a1a1a, inset -8px -8px 16px #3c3c3c",
        'neumorphicButton' : '6px 6px 16px #1a1a1a, -4px -4px 12px #3c3c3c'
      },
    },
  },
  plugins: [],
};
