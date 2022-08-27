// #region Global Imports
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { useMyProfile } from '@/app/hooks/useMyProfile'
// import { useThemeName } from '@/app/hooks/useTheme'
import { ThemeValues } from '@/app/theme/definitions/types'
import { setTheme } from '@/app/theme/switch'
import {
  useGetBurnersLazyQuery,
  useGetHabitsLazyQuery,
} from '@/graphql/generated'

import { Heading, Button } from '@/atoms/.'
import { DescriptionBox, TitleBar } from '@/molecules/.'
import { BurnerForm, ProfileForm } from '@/organisms/.'

import { Template } from '@/templates/CentredContentTemplate'
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import { OnboardingContextBar } from './styled/Onboarding'
import { Visualisations } from './Visualisations'
// #endregion Local Imports

interface OnboardingProps {}

const onboardingMainTitles = [
  { default: 'Make a positive habit', dark: 'Break a negative habit' },
]
const onboardingStageTitles = [
  'Create a profile',
  'Start a Burner',
  'Create a habit',
  'Summary',
]
const onboardingStageCopy = [
  'It looks like you are new here. Fill in some details to join the network',
  "It's time to choose an area of your life to give some attention. We call this a burner. Use the info bar on the right to discover why!",
]

export const Onboarding: React.FC<OnboardingProps> = () => {
  const params = useParams()

  // const [, setName] = useThemeName() // COMMENT OUT DURING TEST
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
    console.log('burnersPayload!.burners :>> ', burnersPayload!.burners)
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
    // setName(themeValue)
    // setTheme(themeValue)

    if (!['make', 'break'].includes(params.theme as string)) navigate('/404')

    if (!!profile) {
      getBurners()
      console.log('userHasBurner :>> ', userHasBurner)
      console.log('userHasHabit :>> ', userHasHabit)
      !(userHasBurner || userHasHabit) && setOnboardingStage('2')
    }
    if (userHasBurner) {
      getHabits()
    }

    if (userHasBurner && userHasHabit) setOnboardingStage('4') //TODO unhardcode
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
            backAction={() =>
              onboardingStage == '1'
                ? navigate(`/`)
                : setOnboardingStage(`${+onboardingStage - 1}`)
            }
          />
          {onboardingStage == '1' ? (
            <ProfileForm
              editMode={false}
              onSuccess={() => setOnboardingStage('2')}
            />
          ) : !userHasBurner ? (
            <BurnerForm
              editMode={false}
              onSuccess={() => setOnboardingStage('3')}
            />
          ) : (
            <div>Create a habit</div>
          )}
        </OnboardingTemplate>

        <OnboardingContextBar>
          <div className="flex items-center justify-end mb-8 xl:space-x-4">
            <span className="hidden xl:block info-bar-label">
              <Heading caps={false} level={3}>
                <span className="text-lg text-gray-600">Confused?</span>
              </Heading>
            </span>
            <Button
              onClick={(e) =>
                e.target.closest('.info-bar').classList.contains('open')
                  ? e.target.closest('.info-bar').classList.remove('open')
                  : e.target.closest('.info-bar').classList.add('open')
              }
              iconName="question-mark"
              size="sm"
              typeOfButton="default"
              text="Info"
            />
          </div>
          <div className="hidden p-4 text-white bg-gray-400 rounded-lg info-list xl:p-8">
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
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
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
