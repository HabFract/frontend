// #region Global Imports
import React from 'react'
import { Switch } from 'antd'
// #endregion Global Imports

// #region Local Imports
// #endregion Local Imports

// #region Interface Imports
import { ISwitchInput } from './types'
// #endregion Interface Imports

export const SwitchInput: React.FC<ISwitchInput.IProps> = ({
  field,
  form,
  ...props
}) => {
  return <Switch {...field} {...props} />
}
