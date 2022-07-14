import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { aProfile } from '@/graphql/generated/mocks'

import { Profile } from '@/graphql/generated'
import { Home } from './Home'

function renderPageWithUser(Page: React.FunctionComponent) {
  const profile: Profile = aProfile()
  return render(
    <MyProfileProvider value={profile}>
      <Page />
    </MyProfileProvider>,
    { wrapper: BrowserRouter },
  )
}

describe('Given a registered user', () => {
  describe('When a Home page is rendered', () => {
    it('should render a menu fit for a registered user', async () => {
      renderPageWithUser(Home)
      const { findByRole, findAllByRole } = screen
      const homeNav = await findByRole('navigation')
      const homeNavButtons = await findAllByRole('menu-item')

      expect(homeNav).toBeInTheDocument()
      expect(homeNavButtons).toHaveLength(3)
    })
  })
})
