// #region Global Imports
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import { SignUpForm } from '@/organisms/SignUpForm'
import { TitleBar } from '@/molecules/TitleBar'
import { PageAction } from '@/molecules/PageAction'

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

  const [, setName] = useThemeName() // COMMENT OUT DURING TEST
  const themeValue =
    params.theme === 'make' ? ThemeValues.Light : ThemeValues.Dark
  const [profile, _] = useMyProfile()
  const navigate = useNavigate()

  const [onboardingStage, setOnboardingStage] = useState(!!profile ? '2' : '1')

  const [getBurners, { data: burnersPayload, loading, error }] =
    useGetBurnersLazyQuery()
  const [userHasBurner, setUserHasBurner] = useState(false)

  const [getHabits, { data: habitsPayload, loading: loading1, error: error1 }] =
    useGetHabitsLazyQuery()
  const [userHasHabit, setUserHasHabit] = useState(false)

  // useEffect(() => {
  //   setUserHasBurner(
  //     !!(burnersPayload?.burners && burnersPayload!.burners.edges.length > 0),
  //   )
  //   setOnboardingStage(burnersPayload && userHasBurner ? '3' : onboardingStage)
  // }, [userHasBurner, burnersPayload])

  // useEffect(() => {
  //   setUserHasHabit(
  //     !!(habitsPayload?.habits && habitsPayload!.habits.edges.length > 0),
  //   )
  // }, [habitsPayload])

  useEffect(() => {
    // Sets the theme context and loads the theme variables COMMENT OUT DURING TEST
    setName(themeValue)
    setTheme(themeValue)
    if (!['make', 'break'].includes(params.theme as string)) navigate('/404')
    if (userHasBurner && userHasHabit) navigate(`${params.theme}/vis`)
  }, [userHasBurner, userHasHabit])

  return (
    <OnboardingTemplate>
      <TitleBar titles={onboardingMainTitles[0]} />
      <PageAction
        stage={+onboardingStage}
        title={onboardingStageTitles[+onboardingStage - 1]}
        copyText={onboardingStageCopy[+onboardingStage - 1]}
      />
      {onboardingStage == '1' ? (
        <SignUpForm onSuccess={() => setOnboardingStage('2')} />
      ) : !userHasBurner ? (
        <div>creating/explaining burner</div>
      ) : (
        <div>creating/explaining habit</div>
      )}
    </OnboardingTemplate>
  )
}
