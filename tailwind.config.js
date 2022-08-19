module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.tsx',
    './src/**/*.ts',
  ],
  content: [
    './src/**/*.css',
    './src/**/styled.ts',
    './src/**/*.tsx',
    './src/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  mode: 'jit',
  important: true, // important in prod is must be

  theme: {
    extend: {
      colors: {
        'gray-700': '#06575A',
        'gray-800': '#014451',
        'gray-800-transparent': 'rgba(1,68,81,0.5)',
        'gray-50': '#F3F4F6',
        'gray-100': 'rgba(243,250,247,0.5)',
        'red-300': '#ff8869',
        'red-400': '#ff6c49',
        'red-500': '#ff502b',
        'red-600': '#f94a27',
        'red-800': '#dd3d1e',
        'green-400': '#82ef51',
        'green-500': '#52d918',
        'gray-500': '#84AAA3',
        // primary: { "50": "#eff6ff", "100": "#83f1c2", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#eb2265", "600": "#2563eb", "700": "#7d9b9b", "800": "#000", "900": "#5b6e6e" }
        primary: {
          50: '#eff6ff',
          100: '#83f1c2',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#f16494',
          600: '#f16494',
          700: '#ee427c',
          800: '#000',
          900: '#5b6e6e',
        },
      },
      screens: {
        sm: '440px',
        'sm-ls': { raw: '(max-width: 600px)' },
        md: '768px',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
}
