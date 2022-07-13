import React from 'react'
import { ThemeProvider as SCProvider } from 'styled-components'
import { DEFAULT_THEME_VALUE } from '../constants'
import { Theme as ThemeDef } from '../theme/theme'

export const ThemeNameContext = React.createContext([DEFAULT_THEME_VALUE] as
  | React.Dispatch<React.SetStateAction<string>>[]
  | [string])

export const ThemeNameProvider = (props) => {
  const [name, setName] = React.useState(DEFAULT_THEME_VALUE)

  const value = React.useMemo(() => [name, setName], [name])
  return <ThemeNameContext.Provider value={value} {...props} />
}

export const ThemeProvider = ({ children }) => (
  <ThemeNameProvider>
    <SCProvider
      theme={
        ThemeDef[`${(ThemeNameContext as any)!._currentValue[0].split`-`[1]}`] // point to theme 'default' or 'dark'
      }
    >
      {children}
    </SCProvider>
  </ThemeNameProvider>
)
