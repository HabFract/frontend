// #region Global Imports
import { DefaultTheme } from 'styled-components'
// #endregion Global Imports

const common = {
  lgray: '#F9FAFB',
  warning: '#FACFA8',
  success: '#D1E0BF',
  info: '#C6DCF6',
  destructive: '#F4CFCF',
}

export const Theme: DefaultTheme = {
  default: {
    colors: {
      primary: '#F759AB',
      secondary: '#08BA81',
      tertiaryMain: '#F9FAFB',
      tertiary2: '#91A7A8',
      tertiary3: '#9CA3AF',
      ...common,
    },
  },
  dark: {
    colors: {
      primary: '#08BA81',
      secondary: '#F759AB',
      tertiaryMain: '#0A253E',
      tertiary2: '#3E3F48',
      tertiary3: '#91A7A8',
      ...common,
    },
  },
}
