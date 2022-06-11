// #region Global Imports
import React from 'react'
import { Avatar as AntAvatar } from 'antd';
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
  {backgroundColor}: IAvatar.IProps,
) => {
  return (
    <IconContainer>
       <AntAvatar size="large" shape='circle' alt='a user' icon={<UserOutlined />} />
    </IconContainer>
  )
}
