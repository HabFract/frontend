// #region Global Imports
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import { SignUpForm } from '@/organisms/SignUpForm'
import { TitleBar } from '@/molecules/TitleBar'
import { DescriptionBox } from '@/molecules/DescriptionBox'

import { setTheme } from '@/app/theme/switch'
import { ThemeValues } from '@/app/theme/definitions/types'
import { useThemeName } from '@/app/hooks/useTheme'
import { useMyProfile } from '@/app/hooks/useMyProfile'
import {
  useGetBurnersLazyQuery,
  useGetHabitsLazyQuery,
} from '@/graphql/generated'
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
    setUserHasBurner(!!(burnersPayload!.burners.edges.length > 0))
    setOnboardingStage(userHasBurner ? '3' : onboardingStage)
  }, [userHasBurner, burnersPayload])

  useEffect(() => {
    if (!habitsPayload) return
    console.log('habitsPayload :>> ', habitsPayload)
    console.log(
      'userHasHabit  onboardingStage :>> ',
      !!(habitsPayload!.habits.edges.length > 0),
      habitsPayload!.habits.edges.length,
    )
    setUserHasHabit(!!(habitsPayload!.habits.edges.length > 0))
    setOnboardingStage(userHasHabit ? '4' : onboardingStage)
  }, [userHasHabit, habitsPayload])

  useEffect(() => {
    // // Sets the theme context and loads the theme variables COMMENT OUT DURING TEST
    // setName(themeValue)
    // setTheme(themeValue)

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
    <OnboardingTemplate>
      <TitleBar
        titles={onboardingMainTitles[0]}
        backAction={() =>
          onboardingStage == '1'
            ? navigate(`/`)
            : setOnboardingStage(`${+onboardingStage - 1}`)
        }
      />
      <DescriptionBox
        stage={+onboardingStage}
        title={useMemo(
          () => onboardingStageTitles[+onboardingStage - 1],
          [onboardingStage],
        )}
        copyText={useMemo(
          () => onboardingStageCopy[+onboardingStage - 1],
          [onboardingStage],
        )}
      />
      {onboardingStage == '1' ? (
        <SignUpForm onSuccess={() => setOnboardingStage('2')} />
      ) : !userHasBurner ? (
        <p></p> //<SignUpForm onSuccess={() => setOnboardingStage('3')} />
      ) : (
        <p></p> //<SignUpForm onSuccess={() => navigate(`../../${params.theme}/vis`)} />
      )}
    </OnboardingTemplate>
  )
}
