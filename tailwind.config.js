module.exports = {
  darkMode: 'class',
  darkMode: 'media',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5faff',
          100: '#e6f7ff',
          200: '#bae8ff',
          300: '#7ed8ff',
          400: '#40c4ff',
          500: '#00aaff',
          600: '#0091e6',
          700: '#0073b3',
          800: '#00528f',
          900: '#003366',
        },
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
