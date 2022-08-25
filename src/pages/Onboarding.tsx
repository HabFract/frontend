// #region Global Imports
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { useMyProfile } from '@/app/hooks/useMyProfile'
import { useThemeName } from '@/app/hooks/useTheme'
import { ThemeValues } from '@/app/theme/definitions/types'
import { setTheme } from '@/app/theme/switch'
import {
  useGetBurnersLazyQuery,
  useGetHabitsLazyQuery,
} from '@/graphql/generated'
import { DescriptionBox } from '@/molecules/DescriptionBox'
import { TitleBar } from '@/molecules/TitleBar'
import { Footer } from '@/organisms/Footer'
import { SignUpForm } from '@/organisms/SignUpForm'
import { Template } from '@/templates/CentredContentTemplate'
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import { OnboardingContextBar } from './styled/Onboarding'
import { CenteringFlexHorizontal } from './styled'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
import { ButtonContainer } from '@/atoms/Button/styled'
// #endregion Local Imports

interface OnboardingProps {}

const onboardingMainTitles = [
  { default: 'Make a positive habit', dark: 'Break a negative habit' },
]
const onboardingStageTitles = [
  'Create a profile',
  'Start a Burner',
  'Create a habit',
]
const onboardingStageCopy = [
  'It looks like you are new here. Fill in some details to join the network',
]

export const Onboarding: React.FC<OnboardingProps> = () => {
  const params = useParams()

  const [, setName] = useThemeName() // COMMENT OUT DURING TEST
  const themeValue =
    params.theme === 'make' ? ThemeValues.Light : ThemeValues.Dark
  const [profile, _] = useMyProfile()
  const navigate = useNavigate()
  const [onboardingStage, setOnboardingStage] = useState('1')

  const [getBurners, { data: burnersPayload, loading, error }] =
    useGetBurnersLazyQuery()
  const [userHasBurner, setUserHasBurner] = useState(false)

  const [getHabits, { data: habitsPayload, loading: loading1, error: error1 }] =
    useGetHabitsLazyQuery()
  const [userHasHabit, setUserHasHabit] = useState(false)

  useEffect(() => {
    if (!burnersPayload) return
    setUserHasBurner(!!(burnersPayload!.burners.edges.length > 0))
    setOnboardingStage(userHasBurner ? '3' : onboardingStage)
  }, [userHasBurner, burnersPayload])

  useEffect(() => {
    setUserHasHabit(
      !!(habitsPayload?.habits && habitsPayload!.habits.edges.length > 0),
    )
  }, [habitsPayload])

  useEffect(() => {
    // // Sets the theme context and loads the theme variables COMMENT OUT DURING TEST
    setName(themeValue)
    setTheme(themeValue)

    if (!['make', 'break'].includes(params.theme as string)) navigate('/404')

    if (!!profile) {
      getBurners()
      !(userHasBurner || userHasHabit) && setOnboardingStage('2')
    }
    if (userHasBurner) {
      getHabits()
    }

    if (userHasBurner && userHasHabit) navigate(`../../${params.theme}/vis`)
  }, [profile, userHasBurner, userHasHabit])

  return (
    <>
      <TitleBar
        titles={onboardingMainTitles[0]}
        backAction={() =>
          onboardingStage == '1'
            ? navigate(`/`)
            : setOnboardingStage(`${+onboardingStage - 1}`)
        }
      />
      <Template illustration={1}>
        <OnboardingTemplate>
          <DescriptionBox
            stage={+onboardingStage}
            title={onboardingStageTitles[+onboardingStage - 1]}
            copyText={onboardingStageCopy[+onboardingStage - 1]}
          />
          {onboardingStage == '1' ? (
            <SignUpForm onSuccess={() => setOnboardingStage('2')} />
          ) : !userHasBurner ? (
            <div>creating/explaining burner</div>
          ) : (
            <div>Create a habit</div>
          )}
        </OnboardingTemplate>

        <OnboardingContextBar>
          <div className="flex items-center justify-around mb-8 space-x-4">
            <a
              href="#"
              className="flex items-center text-2xl font-semibold text-white"
            >
              HabitFract
            </a>
            <a href="#">
              <ButtonContainer typeOfButton="secondary" size="sm">
                <CenteringFlexHorizontal gap={0.5}>
                  <ColoredSvg
                    button
                    iconName="forward"
                    className="w-6 h-6 text-primary-500"
                    rounded={false}
                  ></ColoredSvg>
                  Get Started
                </CenteringFlexHorizontal>
              </ButtonContainer>
            </a>
          </div>
          <div className="block p-8 text-white bg-gray-400 rounded-lg">
            <h3 className="mb-1 text-2xl font-semibold">Your selected plan</h3>
            <p className="mb-4 font-light text-primary-100 sm:text-lg">
              30-day free trial
            </p>
            <ul
              role="list"
              className="flex flex-col items-end space-y-4 text-left xl:items-start"
            >
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support:{' '}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
          </div>
        </OnboardingContextBar>
      </Template>
    </>
  )
}
