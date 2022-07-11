// #region Global Imports
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { setTheme } from '@/app/theme/switch'
import { OnboardingTemplate } from '../templates/OnboardingStageTemplate'
import { LoginForm } from '../organisms/LoginForm'
import { SignUpForm } from '../organisms/SignUpForm'
import { TitleBar } from '../molecules/TitleBar'
import { PageAction } from '../molecules/PageAction'
import { useThemeName } from '@/app/contexts/themeContext'
import { ThemeValues } from '@/app/theme/types'
// #endregion Local Imports

interface OnboardingProps {}

const onboardingStageTitles = ['Create a profile']
const onboardingStageCopy = [
  'It looks like you’re new here. Fill in some details to join the network',
]

export const Onboarding: React.FC<OnboardingProps> = () => {
  const [onboardingStage, setOnboardingStage] = useState('1')
  const [, setName] = useThemeName()
  const params = useParams()
  const themeValue =
    params.theme === 'make' ? ThemeValues.Light : ThemeValues.Dark

  useEffect(() => {
    setName(themeValue)
    setTheme(themeValue)
  }, [])

  return typeof localStorage.getItem('username') !== 'string' ? ( // Fetch an agent profile for this user (stubbed)
    <OnboardingTemplate>
      <LoginForm />
    </OnboardingTemplate>
  ) : (
    <OnboardingTemplate>
      <TitleBar />
      <PageAction
        title={onboardingStageTitles[+onboardingStage - 1]}
        copyText={onboardingStageCopy[+onboardingStage - 1]}
      />
      <SignUpForm />
    </OnboardingTemplate>
  )
}
