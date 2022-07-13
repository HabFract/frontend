// #region Global Imports
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// #endregion Global Imports

// #region Local Imports
import { setTheme } from '@/app/theme/switch'
import { OnboardingTemplate } from '@/templates/OnboardingStageTemplate'
import { LoginForm } from '@/organisms/LoginForm'
import { SignUpForm } from '@/organisms/SignUpForm'
import { TitleBar } from '@/molecules/TitleBar'
import { PageAction } from '@/molecules/PageAction'
import { useThemeName } from '@/app/hooks/useTheme'
import { ThemeValues } from '@/app/theme/definitions/types'
// #endregion Local Imports

interface OnboardingProps {}

const onboardingStageTitles = ['Create a profile']
const onboardingStageCopy = [
  'It looks like you are new here. Fill in some details to join the network',
]

export const Onboarding: React.FC<OnboardingProps> = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [onboardingStage, setOnboardingStage] = useState('1')

  const [, setName] = useThemeName()
  const themeValue =
    params.theme === 'make' ? ThemeValues.Light : ThemeValues.Dark

  useEffect(() => {
    setName(themeValue)
    setTheme(themeValue)
  }, [])
  if (!['make', 'break'].includes(params.theme as string)) navigate('/404')

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
