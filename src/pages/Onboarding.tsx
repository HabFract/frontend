// #region Global Imports
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
import { SignUpForm } from '@/organisms/SignUpForm'
// #endregion Global Imports
// #region Local Imports
import { Template } from '@/templates/CentredContentTemplate'
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
      </Template>
    </>
  )
}
