import React from 'react'
import { Theme } from '@contexts/themeContext'
import { StorySwitcher } from '@app/theme/switch'
import '/src/index.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

const themeDecorator = storyFn =>
  React.createElement(
    Theme,
    null,
    React.createElement('div', { className: 'flex flex-col', style: { gap: '2rem' } }, [
      React.createElement(StorySwitcher),
      storyFn()
    ])
  )

const decorators = [themeDecorator]
export { decorators }
