// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { ITitleBar } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container } from './styled'
// #endregion Local Imports

export const TitleBar: React.FunctionComponent<ITitleBar.IProps> = (
  _props: ITitleBar.IProps,
) => {
  return <Container></Container>
}
