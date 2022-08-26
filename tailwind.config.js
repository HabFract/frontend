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
    fontSize: {
      // Major third scale
      xs: '.512rem',
      sm: '.64rem',
      tiny: '.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.563rem',
      '2xl': '1.953rem',
      '3xl': '2.441rem',
      '4xl': '3.052rem',
    },
    fontFamily: {
      copy: ['Karma', 'Montserrat', 'Georgia'],
      head: ['Open Sans Condensed', 'Open Sans'],
      display: ['Roboto', 'Open Sans'],
    },
    extend: {
      boxShadow: {
        head: '0 0.15rem  rgba(241, 100, 148, 0.5)',
        'head-dark': '0 0.15rem  rgba(241, 100, 148, 1)',
      },
      // colors: {
      //   'gray-700': '#',
      //   'gray-800': '#014451',
      //   'primary-50-transparent': 'rgba(239, 246, 255, 0.25) !important',
      //   'gray-800-transparent': 'rgba(1,68,81,0.5)',
      //   'gray-50': '#',
      //   'gray-100': '#FCFFFC',
      //   'gray-100-transparent': 'rgba(243,250,247,0.5)',
      //   'red-300': '#ff8869',
      //   'red-400': '#ff6c49',
      //   'red-500': '#ff502b',
      //   'red-600': '#f94a27',
      //   'red-800': '#dd3d1e',
      //   'green-400': '#82ef51',
      //   'green-500': '#52d918',
      //   'gray-500': '#5b6e6e',
      //   // primary: { "50": "#eff6ff", "100": "#83f1c2", "200": "#83CFB5", "300": "#93c5fd", "400": "#60a5fa", "500": "#eb2265", "600": "#2563eb", "700": "#7d9b9b", "800": "#000", "900": "#5b6e6e" }
      //   primary: {
      //     50: '#eff6ff',
      //     100: '#83f1c2',
      //     200: '#83CFB5',
      //     300: '#93c5fd',
      //     400: '#60a5fa',
      //     500: '#f16494',
      //     600: '#f16494',
      //     700: '#7d9b9b',
      //     800: '#000',
      //     900: '#5b6e6e',
      //   },
      // },
      colors: {
        'gray-700': '#06575A',
        'gray-800': '#014451',
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
          500: '#eb2265',
          600: '#f16494',
          700: '#ee427c',
          800: '#000',
          900: '#5b6e6e',
        },
      },
      screens: {
        sm: '440px',
        'sm-ls': '600px',
        md: '768px',
        lg: '1024px',
      },
      minHeight: {
        28: '7rem',
      },
      maxWidth: {
        64: '16rem',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
}
