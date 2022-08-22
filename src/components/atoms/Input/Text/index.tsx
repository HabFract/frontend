// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

// #region Interface Imports
import { ITextInput } from './types'
// #endregion Interface Imports

export const TextInput: React.FC<ITextInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  return <input type="text" {...field} {...props} />
}
