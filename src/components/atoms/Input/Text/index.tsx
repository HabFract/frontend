// #region Global Imports
import React from 'react'
import { Input } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
// #endregion Global Imports

// #region Local Imports
import { Container } from './styled'
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
