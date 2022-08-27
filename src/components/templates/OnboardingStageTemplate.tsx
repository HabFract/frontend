// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from '@/templates/styled/Onboarding'
// #endregion Local Imports

interface OnboardingTemplateProps {
  children: React.ReactNode
}

export const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
}) => {
  return <Container>{children}</Container>
}
