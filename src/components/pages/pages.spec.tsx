import React from 'react'
import { render, screen } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { MyProfileProvider } from '@/contexts/myProfileContext'

import { aHabitConnection, aProfile } from '@/graphql/generated/mocks'

import { GetHabitsDocument, Profile } from '@/graphql/generated'
import { Home } from './Home'
import { Onboarding } from './Onboarding'

function renderPage(Page: React.FunctionComponent, options: any) {
  const profile: Profile = aProfile()
  const { withUser } = options
  const mocks: readonly MockedResponse<any>[] = [
    {
      request: {
        query: GetHabitsDocument,
      },
      result: {
        data: {
          habits: { edges: aHabitConnection() },
        },
      },
    },
  ]

  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MyProfileProvider value={withUser ? profile : undefined}>
        <Page />
      </MyProfileProvider>
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
      renderPage(Onboarding, {})
      const { findByRole, findAllByRole } = screen
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
    describe('Given the user has not created a Life Domain', () => {
      it('Then it  should render Onboarding stage 2', async () => {
        renderPage(Onboarding, { withUser: true })
        const { findByRole, findAllByRole } = screen
        expect(await screen.findByText('Loading...')).toBeInTheDocument()
        expect(
          await screen.findByText('Create a Life Domain'),
        ).toBeInTheDocument()
      })
    })
    describe('Given the user has created a Life Domain but not a Habit', () => {
      it('Then it  should render Onboarding stage 3', async () => {
        renderPage(Onboarding, { withUser: true })
        const { findByRole, findAllByRole } = screen
      })
    })
    describe('Given the user has created a Life Domain and a Habit', () => {
      it('Then it  should redirect to the Habit Dashboard', async () => {
        renderPage(Onboarding, { withUser: true })
        const { findByRole, findAllByRole } = screen
      })
    })
  })
})
