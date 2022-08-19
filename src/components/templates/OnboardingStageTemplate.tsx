// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { Container } from '@/app/styled/Onboarding'
import React from 'react'

// #endregion Local Imports

interface OnboardingTemplateProps {
  children: React.ReactNode
}

export const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
}) => {
  return <Container>{children}</Container>
}
