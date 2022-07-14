import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { aProfile } from '@/graphql/generated/mocks'

import { Profile } from '@/graphql/generated'
import { Home } from './Home'

function renderPage(Page: React.FunctionComponent, options: any) {
  const profile: Profile = aProfile()
  const { withUser } = options

  return render(
    <MyProfileProvider value={withUser ? profile : undefined}>
      <Page />
    </MyProfileProvider>,
    { wrapper: BrowserRouter },
  )
}

describe('Given a new user', () => {
  describe('When a Home page is rendered', () => {
    it('should render a menu fit for a new user', async () => {
      renderPage(Home, {})
      const { findByRole, findAllByRole } = screen
      const homeNav = await findByRole('navigation')
      const homeNavButtons = await findAllByRole('menu-item')

      expect(homeNav).toBeInTheDocument()
      expect(homeNavButtons).toHaveLength(4)
    })
  })
})
describe('Given a registered user', () => {
  describe('When a Home page is rendered', () => {
    it('should render a menu fit for a registered user', async () => {
      renderPage(Home, { withUser: true })
      const { findByRole, findAllByRole } = screen
      const homeNav = await findByRole('navigation')
      const homeNavButtons = await findAllByRole('menu-item')

      expect(homeNav).toBeInTheDocument()
      expect(homeNavButtons).toHaveLength(3)
    })
  })
})
