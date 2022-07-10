// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { StyledP } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IP } from './types'
// #endregion Interface Imports

export const P: React.FC<IP.IProps> = ({ copyText }) => {
  return <StyledP>{copyText}</StyledP>
}
