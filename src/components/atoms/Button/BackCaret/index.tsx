// #region Global Imports
import { LeftOutlined } from '@ant-design/icons'
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IBackCaret } from './types'
// #endregion Interface Imports

export const BackCaret: React.FC<IBackCaret.IProps> = ({}) => {
  return (
    <Container>
      <LeftOutlined />
    </Container>
  )
}
