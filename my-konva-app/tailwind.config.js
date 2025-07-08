/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-foreground': '#fff',
        card: '#fff',
        'card-foreground': '#1e293b',
        input: '#e5e7eb',
        accent: '#f1f5f9',
        'accent-foreground': '#1e293b',
        ring: '#6366f1',
        background: '#f8fafc',
        'muted-foreground': '#64748b',
      },
    },
  },
  plugins: [],
}

