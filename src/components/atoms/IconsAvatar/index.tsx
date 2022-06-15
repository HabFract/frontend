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
  {rounded, description, type}: IAvatar.IProps,
) => {
  return (
    <IconContainer type={type}>
       <AntAvatar className="avatar place-items-center grid" size={64} shape={rounded ? 'circle' : 'square'} alt={description} icon={<UserOutlined  />} />
    </IconContainer>
  )
}
