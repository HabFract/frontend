// #region Global Imports
import React, { useEffect } from 'react'
// #endregion Global Imports

// #region Local Imports
import { setTheme } from '@/app/theme/switch'
import { OnboardingTemplate } from '../templates/OnboardingStageTemplate'
import { LoginForm } from '../organisms/LoginForm'
import { SignUpForm } from '../organisms/SignUpForm'
import { TitleBar } from '../molecules/TitleBar'
import { PageAction } from '../molecules/PageAction'
// #endregion Local Imports

interface OnboardingProps {
  isDark: boolean
}

export const Onboarding: React.FC<OnboardingProps> = ({ isDark }) => {
  useEffect(() => setTheme(isDark ? 'theme-dark' : 'theme-default'), [])

  return typeof localStorage.getItem('username') !== 'string' ? ( // Fetch an agent profile for this user (stubbed)
    <OnboardingTemplate>
      <LoginForm />
    </OnboardingTemplate>
  ) : (
    <OnboardingTemplate>
      <TitleBar />
      <PageAction />
      <SignUpForm />
    </OnboardingTemplate>
  )
}
