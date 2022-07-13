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
  ],
  darkMode: 'class',
  mode: 'jit',
  important: true, // important in prod is must be

  theme: {
    extend: {
      screens: {
        'light-mode': { raw: '(prefers-color-scheme: light)' },
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        phone: { raw: '(max-width: 768px)' },
        desktop: { raw: '(min-width: 1024px)' },
        tablet: { raw: '(max-width: 1023px)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
