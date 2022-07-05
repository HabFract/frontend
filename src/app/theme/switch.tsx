import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'
import Button from 'antd/lib/button'
import React from 'react'

const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  })
}

export const Switcher: React.FunctionComponent<any> = (_props: any) => {
  return (
    <div>
      <Button type="primary" onClick={() => setTheme('theme-default')}>
        Light Mode
      </Button>
      <Button type="default" onClick={() => setTheme('theme-dark')}>
        Dark Mode
      </Button>
    </div>
  )
}

export const StorySwitcher: React.FunctionComponent<any> = (_props: any) => {
  return (
    <div>
      <Button
        type="primary"
        onClick={(e) =>
          ((e.target as HTMLButtonElement).closest('html')!.className =
            'theme-default')
        }
      >
        Light Mode
      </Button>
      <Button
        type="default"
        onClick={(e) =>
          ((e.target as HTMLButtonElement).closest('html')!.className =
            'theme-dark')
        }
      >
        Dark Mode
      </Button>
    </div>
  )
}
