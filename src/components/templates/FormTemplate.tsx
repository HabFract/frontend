// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
// import { ListItem } from './styled'
// #endregion Local Imports

interface FormTemplateProps {
  children: React.ReactNode
}

export const FormTemplate: React.FC<FormTemplateProps> = ({ children }) => {
  return <p>{children}</p>
}
