// #region Global Imports
import React, { useEffect, useState } from 'react'
// #endregion Global Imports

// #region Local Imports
import { setTheme, Switcher } from '@/app/theme/switch'
import { OnboardingTemplate } from '../templates/OnboardingStageTemplate'
import { LoginForm } from '../organisms/LoginForm'
import { SignUpForm } from '../organisms/SignUpForm'
import { TitleBar } from '../molecules/TitleBar'
import { PageAction } from '../molecules/PageAction'
import { useThemeName } from '@/app/contexts/themeContext'
// #endregion Local Imports

interface OnboardingProps {
  isDark: boolean
}

const onboardingStageTitles = ['Create a profile']
const onboardingStageCopy = [
  'It looks like you’re new here. Fill in some details to join the network',
]

export const Onboarding: React.FC<OnboardingProps> = ({ isDark }) => {
  const [onboardingStage, setOnboardingStage] = useState('1')
  const [, setName] = useThemeName()

  useEffect(() => {
    const themeString = isDark ? 'theme-dark' : 'theme-default'
    setName(themeString)
    setTheme(themeString)
  }, [])

  return typeof localStorage.getItem('username') !== 'string' ? ( // Fetch an agent profile for this user (stubbed)
    <OnboardingTemplate>
      <LoginForm />
    </OnboardingTemplate>
  ) : (
    <Switcher>
      <OnboardingTemplate>
        <TitleBar />
        <PageAction
          title={onboardingStageTitles[+onboardingStage - 1]}
          copyText={onboardingStageCopy[+onboardingStage - 1]}
        />
        <SignUpForm />
      </OnboardingTemplate>
    </Switcher>
  )
}
