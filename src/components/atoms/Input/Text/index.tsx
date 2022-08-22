// #region Global Imports
// Form as AntForm
// #endregion Global Imports
// #region Local Imports
// #endregion Local Imports
// #region Interface Imports
import { ITextInput } from './types'
import React from 'react'

// #endregion Interface Imports

export const TextInput: React.FC<ITextInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  return <input type="text" {...field} {...props} />
}
