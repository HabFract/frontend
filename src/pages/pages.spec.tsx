import React from 'react'
import {
  act,
  getByTestId,
  queryByRole,
  render,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { ThemeProvider } from '@/contexts/themeContext'
// import { history, CustomRouter } from '@/app/history'

import {
  aBurner,
  aBurnerEdge,
  aHabitEdge,
  aProfile,
} from '@/graphql/generated/mocks'
import {
  Burner,
  GetBurnersDocument,
  GetHabitsDocument,
  Profile,
} from '@/graphql/generated'

import { Home } from './Home'
import { Onboarding, onboardingStageTitles } from './Onboarding'
const [onboardingTitle1, onboardingTitle2, onboardingTitle3] =
  onboardingStageTitles

// export const RouterProvider = (children: any) => (
//   <CustomRouter history={history}>{children}</CustomRouter>
// )

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
          {/* <RouterProvider> */}
          <Page />
          {/* </RouterProvider> */}
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
    it('Then it should render a ProfileForm', async () => {
      renderPage(Onboarding, { withUser: false })
      const { getByRole } = screen
      const form = await getByRole('form', { name: 'profile-form' })
      expect(form).toBeInTheDocument()
    })

    it('Then it should render Onboarding stage 1', async () => {
      renderPage(Onboarding, { withUser: false })
      const { findByText } = screen
      expect(await findByText(onboardingTitle1)).toBeInTheDocument()
    })

    it('And When the back button is clicked Then it should render the Home page', async () => {
      const user = userEvent.setup()
      renderPage(Onboarding, { withUser: false })

      const { getByRole, findByRole, getByText, queryByText } = screen
      const button = await getByRole('button', { name: /Go Back/i })

      await user.click(button)

      const profileHeader = await queryByText(onboardingTitle1)
      expect(profileHeader).not.toBeInTheDocument()
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
        expect(await findByText(onboardingTitle2)).toBeInTheDocument()
      })

      it('And When the back button is clicked Then it should render a ProfileForm in edit mode', async () => {
        const user = userEvent.setup()
        renderPage(Onboarding, { withUser: true, withBurner: false })

        const { getByRole, queryByRole, queryByText, queryByTestId } = screen
        const button = await getByRole('button', { name: /Go Back/i })

        await user.click(button)

        const oldHeader = queryByText(onboardingTitle2)
        expect(oldHeader).not.toBeInTheDocument()
        const newHeader = queryByText(onboardingTitle1)
        expect(newHeader).toBeInTheDocument()

        const { nickname, fields } = aProfile() as Profile

        const input1 = queryByRole('textbox', { name: /nickname/i })
        expect(input1).toHaveValue(nickname)
        const input2 = queryByRole('textbox', { name: /location/i })
        expect(input1).toHaveValue(fields!.location)

        const imageUpload = queryByTestId('image-upload')
        expect(imageUpload).not.toBeInTheDocument()

        const isPublicCheckbox = queryByRole('checkbox', { name: /isPublic/i })
        expect(isPublicCheckbox).toHaveValue(fields!.isPublic)
      })
    })
    describe('Given the registered user has started a Burner but not a Habit', () => {
      it('Then it  should render Onboarding stage 3', async () => {
        renderPage(Onboarding, { withUser: true, withBurner: true })
        const { findByText } = screen
        expect(await findByText('Create a habit')).toBeInTheDocument()
      })

      it('And When the back button is clicked Then it should render a BurnerForm in edit mode', async () => {
        const user = userEvent.setup()
        renderPage(Onboarding, { withUser: true, withBurner: true })

        const { getByRole, queryByRole, queryByText } = screen
        const button = await getByRole('button', { name: /Go Back/i })

        await user.click(button)
        screen.logTestingPlaygroundURL(button)

        const oldHeader = queryByText(onboardingTitle3)
        expect(oldHeader).not.toBeInTheDocument()
        const newHeader = queryByText(onboardingTitle2)
        expect(newHeader).toBeInTheDocument()

        const { metadata, name } = aBurner() as Burner

        const input1 = queryByRole('textbox', { name: /name/i })
        expect(input1).toHaveValue(name)
        const input2 = queryByRole('textbox', { name: /description/i })
        expect(input2).toHaveValue(metadata!.description)
        const input3 = queryByRole('textbox', { name: /hashtag/i })
        expect(input3).toHaveValue(metadata!.hashtag)
      })
    })
    describe('Given the registered user has started a Burner and a Habit', () => {
      it('Then it  should take you to a summary page (stage 4)', async () => {
        renderPage(Onboarding, {
          withUser: true,
          withBurner: true,
          withHabit: true,
        })
        const { findByText } = screen
        expect(await findByText(/Summary/)).toBeInTheDocument()
      })
    })
  })
})
