// #region Global Imports
import { Container } from '@/app/styled'
import React from 'react'
// #endregion Global Imports

// #region Local Imports
// import { ListItem } from './styled'
// #endregion Local Imports

interface OnboardingTemplateProps {
  children: React.ReactNode
}

export const OnboardingTemplate: React.FC<OnboardingTemplateProps> = ({
  children,
}) => {
  return <Container>{children}</Container>
}
