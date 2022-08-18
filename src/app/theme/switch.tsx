import { useThemeName } from '../hooks/useTheme'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import Button from 'antd/lib/button'
import React from 'react'

export const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  })
}

export const Switcher: React.FunctionComponent<any> = (_props: any) => {
  const [, setName] = useThemeName()
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setName('theme-default')
          setTheme('theme-default')
        }}
      >
        Light Mode
      </Button>
      <Button
        type="default"
        onClick={() => {
          setName('theme-dark')
          setTheme('theme-dark')
        }}
      >
        Dark Mode
      </Button>
    </div>
  )
}

export const StorySwitcher: React.FunctionComponent<any> = (_props: any) => {
  const [, setName] = useThemeName()
  return (
    <div>
      <Button
        type="primary"
        onClick={(e) => {
          setName('theme-default')
          ;(e.target as HTMLButtonElement).closest('html')!.className =
            'theme-default'
        }}
      >
        Light Mode
      </Button>
      <Button
        type="default"
        onClick={(e) => {
          setName('theme-dark')
          ;(e.target as HTMLButtonElement).closest('html')!.className =
            'theme-dark'
        }}
      >
        Dark Mode
      </Button>
    </div>
  )
}
