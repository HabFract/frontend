// #region Global Imports
import React from 'react'
import { Avatar as AntAvatar } from 'antd';
import {
  UserOutlined 
} from '@ant-design/icons';
// #endregion Global Imports

import { StorySwitcher } from '@app/theme/switch'

// #region Interface Imports
import { IAvatar } from './types';
// #endregion Interface Imports

// #region Local Imports
import { IconContainer } from './styled'
// #endregion Local Imports

const Avatar: React.FunctionComponent<IAvatar.IProps> = (
  {rounded, description, type}: IAvatar.IProps,
) => {
  return (
    <IconContainer type={type}>
      <StorySwitcher />
       <AntAvatar className="avatar place-items-center grid" size={64} shape={rounded ? 'circle' : 'square'} alt={description} icon={<UserOutlined  />} />
    </IconContainer>
  )
}

export default Avatar