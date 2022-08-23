import { useThemeName } from '../hooks/useTheme'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import React from 'react'

export const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  })
  debugger
}

export const Switcher: React.FunctionComponent<any> = (_props: any) => {
  const [, setName] = useThemeName()
  return (
    <div>
      <button
        onClick={() => {
          setName('theme-default')
          setTheme('theme-default')
        }}
      >
        Light Mode
      </button>
      <button
        onClick={() => {
          setName('dark')
          setTheme('dark')
        }}
      >
        Dark Mode
      </button>
    </div>
  )
}

export const StorySwitcher: React.FunctionComponent<any> = (_props: any) => {
  const [, setName] = useThemeName()
  return (
    <div>
      <button
        onClick={(e) => {
          setName('theme-default')
          ;(e.target as HTMLButtonElement).closest('html')!.className =
            'theme-default'
        }}
      >
        Light Mode
      </button>
      <button
        onClick={(e) => {
          setName('dark')
          ;(e.target as HTMLButtonElement).closest('html')!.className = 'dark'
        }}
      >
        Dark Mode
      </button>
    </div>
  )
}
