import React, { Dispatch, SetStateAction, useContext } from 'react'
import { ThemeNameContext } from '@/contexts/themeContext'

export const useThemeName = () => {
  const context = useContext(ThemeNameContext)
  if (!context) {
    throw new Error(`useThemeName must be used within a ThemeNameProvider`)
  }
  return context as Dispatch<SetStateAction<string>>[]
}
