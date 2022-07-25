// #region Global Imports
import React, { useEffect, useState } from 'react'
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
// #endregion Local Imports

interface OnboardingProps {}

const onboardingStageTitles = ['Create a profile']
const onboardingStageCopy = [
  'It looks like you are new here. Fill in some details to join the network',
]

export const Onboarding: React.FC<OnboardingProps> = () => {
  const params = useParams()
  const [onboardingStage, setOnboardingStage] = useState('1')

  // const [, setName] = useThemeName()
  const themeValue =
    params.theme === 'make' ? ThemeValues.Light : ThemeValues.Dark
  const [profile, _] = useMyProfile()
  const navigate = useNavigate()
  useEffect(() => {
    // Sets the theme context and loads the theme variables COMMENT OUT DURING TEST
    // setName(themeValue)
    // setTheme(themeValue)
    if (!['make', 'break'].includes(params.theme as string)) navigate('/404')
  }, [])
  console.log('profile :>> ', profile)
  return !!profile ? ( // Fetch an agent profile for this user (stubbed)
    <OnboardingTemplate>
      <div>{'Helo'}</div>
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
