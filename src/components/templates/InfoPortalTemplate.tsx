// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from '@/templates/styled/InfoPortal'
// #endregion Local Imports

interface InfoPortalTemplateProps {
  children: React.ReactNode
}

export const InfoPortalTemplate: React.FC<InfoPortalTemplateProps> = ({
  children,
}) => {
  return <Container>{children}</Container>
}
