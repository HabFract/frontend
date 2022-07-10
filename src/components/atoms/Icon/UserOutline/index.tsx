// #region Global Imports
import { UserOutlined } from '@ant-design/icons/lib/icons'
import Avatar from 'antd/lib/avatar'
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IUserOutline } from './types'
// #endregion Interface Imports

export const UserOutline: React.FC<IUserOutline.IProps> = ({ rounded }) => {
  return (
    <Container>
      <Avatar
        className="avatar place-items-center grid"
        size={64}
        shape={rounded ? 'circle' : 'square'}
        alt={'Create a profile'}
        icon={<UserOutlined />}
      />
    </Container>
  )
}
