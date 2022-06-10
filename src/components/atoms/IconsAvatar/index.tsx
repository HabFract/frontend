// #region Global Imports
import React from 'react'
import {
  UserOutlined 
} from '@ant-design/icons';
// #endregion Global Imports

// #region Interface Imports
import { IAvatar } from './Avatar'
// #endregion Interface Imports

// #region Local Imports
import { IconContainer } from './styled'
// #endregion Local Imports

export const Avatar: React.FunctionComponent<IAvatar.IProps> = (
  _props: IAvatar.IProps,
) => {
  return (
    <IconContainer>
      <UserOutlined />
    </IconContainer>
  )
}
