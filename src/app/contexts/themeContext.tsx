import React from 'react'
import { Theme as ThemeDef } from '../theme/theme'
import { ThemeProvider } from 'styled-components'

const DEFAULT_THEME_VALUE = 'theme-dark'
const ThemeNameContext = React.createContext([DEFAULT_THEME_VALUE] as
  | React.Dispatch<React.SetStateAction<string>>[]
  | [string])

export const ThemeNameProvider = (props) => {
  const [name, setName] = React.useState(DEFAULT_THEME_VALUE)

  const value = React.useMemo(() => [name, setName], [name])
  return <ThemeNameContext.Provider value={value} {...props} />
}

export const useThemeName = () => {
  const context = React.useContext(ThemeNameContext)
  if (!context) {
    throw new Error(`useThemeName must be used within a ThemeNameProvider`)
  }
  return context as React.Dispatch<React.SetStateAction<string>>[]
}

export const Theme = ({ children }) => (
  <ThemeNameProvider>
    <ThemeProvider
      theme={
        ThemeDef[`${(ThemeNameContext as any)!._currentValue[0].split`-`[1]}`] // point to theme 'default' or 'dark'
      }
    >
      {children}
    </ThemeProvider>
  </ThemeNameProvider>
)
