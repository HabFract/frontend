import React from 'react'
import { ThemeNameContext } from '@/contexts/themeContext'

export const useThemeName = () => {
  const context = React.useContext(ThemeNameContext)
  if (!context) {
    throw new Error(`useThemeName must be used within a ThemeNameProvider`)
  }
  return context as React.Dispatch<React.SetStateAction<string>>[]
}
