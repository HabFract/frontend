import { render, screen } from '@testing-library/react'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { aProfile } from '@/graphql/generated/mocks'

import { Home } from './Home'

function renderPageWithUser() {
  const profile = aProfile()
  return render(
    <MyProfileProvider>
      <Home />
    </MyProfileProvider>,
  )
}

describe('Given a registered user', () => {
  it('should render a menu fit for a registered user', () => {
    // const wrapper = mount(<BackCaret />)
    // expect(wrapper).toMatchSnapshot()
  })
})
