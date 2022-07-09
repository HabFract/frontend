// #region Global Imports
import React, { useState, useEffect } from 'react'
// #endregion Global Imports

// #region Local Imports
import { LoginForm } from '../organisms/LoginForm'
import { SignUpForm } from '../organisms/SignUpForm'
// import { ListItem } from './styled'
import { useGetHabitsQuery } from '@/graphql/generated'
// #endregion Local Imports

interface OnboardingProps {
  isDark: boolean
}

export const Onboarding: React.FC<OnboardingProps> = ({ isDark }) => {
  return typeof localStorage.getItem('username') !== 'string' ? ( // Fetch an agent profile for this user (stubbed)
    <LoginForm />
  ) : (
    <SignUpForm />
  )
}
