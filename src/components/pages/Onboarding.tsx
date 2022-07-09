// #region Global Imports
import React, { useState, useEffect } from 'react'
// #endregion Global Imports

// #region Local Imports
import { LoginForm } from '../organisms/LoginForm'
import { SignUpForm } from '../organisms/SignUpForm'
// import { ListItem } from './styled'
import { useGetHabitsQuery } from '@/graphql/generated'
import { FormTemplate } from '../templates/FormTemplate'
import { setTheme } from '@/app/theme/switch'
// #endregion Local Imports

interface OnboardingProps {
  isDark: boolean //TODO: make this a context
}

export const Onboarding: React.FC<OnboardingProps> = ({ isDark }) => {
  useEffect(() => setTheme(isDark ? 'theme-dark' : 'theme-default'), [])

  return typeof localStorage.getItem('username') !== 'string' ? ( // Fetch an agent profile for this user (stubbed)
    <FormTemplate>
      <LoginForm />
    </FormTemplate>
  ) : (
    <FormTemplate>
      <SignUpForm />
    </FormTemplate>
  )
}
