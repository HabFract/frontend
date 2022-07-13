import React from 'react'
import { render, screen } from '@testing-library/react'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { aProfile } from '@/graphql/generated/mocks'

import { Profile } from '@/graphql/generated'
import { Home } from './Home'

function renderPageWithUser(Page: React.FunctionComponent) {
  const profile: Profile = aProfile()
  return render(
    <MyProfileProvider>
      <Page />
    </MyProfileProvider>,
  )
}

describe('Given a registered user', () => {
  describe('When a Home page is rendered', () => {
    it('should render a menu fit for a registered user', () => {
      renderPageWithUser(Home)
      // expect(wrapper).toMatchSnapshot()
    })
  })
})
