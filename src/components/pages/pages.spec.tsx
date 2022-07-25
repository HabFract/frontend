import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { ThemeProvider } from '@/contexts/themeContext'

import {
  aBurnerEdge,
  aHabitConnection,
  aHabitEdge,
  aProfile,
} from '@/graphql/generated/mocks'
import {
  GetBurnersDocument,
  GetHabitsDocument,
  Profile,
} from '@/graphql/generated'

import { Home } from './Home'
import { Onboarding } from './Onboarding'

function renderPage(Page: React.FunctionComponent, options: any) {
  const profile: Profile = aProfile()
  const { withUser, withBurner, withHabit } = options
  const mocks: readonly MockedResponse<any>[] = [
    {
      request: {
        query: GetHabitsDocument,
      },
      result: {
        data: {
          habits: { edges: withHabit ? [aHabitEdge()] : [] },
        },
      },
    },
    {
      request: {
        query: GetBurnersDocument,
      },
      result: {
        data: {
          burners: { edges: withBurner ? [aBurnerEdge()] : [] },
        },
      },
    },
  ]

  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ThemeProvider>
        <MyProfileProvider value={withUser ? profile : undefined}>
          <Page />
        </MyProfileProvider>
      </ThemeProvider>
    </MockedProvider>,
    { wrapper: BrowserRouter },
  )
}

describe('Given a new user', () => {
  describe('When a Home page is rendered', () => {
    it('Then it should render a menu fit for a new user', async () => {
      renderPage(Home, {})
      const { findByRole, findAllByRole } = screen
      const homeNav = await findByRole('navigation')
      const homeNavButtons = await findAllByRole('menu-item')

      expect(homeNav).toBeInTheDocument()
      expect(homeNavButtons).toHaveLength(4)
    })
  })

  describe('When an Onboarding page is rendered', () => {
    it('Then it should render a SignUpForm', async () => {
      renderPage(Onboarding, { withUser: false })
      const { getByRole } = screen
      const form = await getByRole('form', { name: 'sign-up-form' })
      expect(form).toBeInTheDocument()
    })

    it('Then it  should render Onboarding stage 1', async () => {
      renderPage(Onboarding, { withUser: false })
      const { findByText } = screen
      expect(await findByText('Create a profile')).toBeInTheDocument()
    })
  })
})

describe('Given a registered user', () => {
  describe('When a Home page is rendered', () => {
    it('Then it should render a menu fit for a registered user', async () => {
      renderPage(Home, { withUser: true })
      const { findByRole, findAllByRole } = screen
      const homeNav = await findByRole('navigation')
      const homeNavButtons = await findAllByRole('menu-item')

      expect(homeNav).toBeInTheDocument()
      expect(homeNavButtons).toHaveLength(3)
    })
  })

  describe('When an Onboarding page is rendered', () => {
    describe('Given the registered user has not started a Burner', () => {
      it('Then it  should render Onboarding stage 2', async () => {
        renderPage(Onboarding, { withUser: true })
        const { findByText } = screen
        expect(await findByText('Start a Burner')).toBeInTheDocument()
      })
    })
    describe('Given the registered user has started a Burner but not a Habit', () => {
      it('Then it  should render Onboarding stage 3', async () => {
        renderPage(Onboarding, { withUser: true, withBurner: true })
        const { findByText } = screen
        expect(await findByText('Create a habit')).toBeInTheDocument()
      })
    })
    describe('Given the registered user has started a Burner and a Habit', () => {
      it('Then it  should redirect to the default Visualisation', async () => {
        renderPage(Onboarding, { withUser: true })
        const { findByRole, findAllByRole } = screen
      })
    })
  })
})
