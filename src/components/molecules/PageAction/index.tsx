// #region Global Imports
import React from 'react'
import { useNavigate } from 'react-router-dom'
// #endregion Global Imports

// #region Interface Imports
import { IPageAction } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container } from './styled'
// #endregion Local Imports

export const PageAction: React.FunctionComponent<IPageAction.IProps> = (
  _props: IPageAction.IProps,
) => {
  const navigate = useNavigate()

  return <Container></Container>
}
