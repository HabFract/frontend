// #region Global Imports
import React from 'react'
import { Input } from 'antd' //Form as AntForm
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
  return <Input {...field} {...props} />
}
