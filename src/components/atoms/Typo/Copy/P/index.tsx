// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { StyledP } from './styled'
// #endregion Local Imports
// #region Interface Imports
import { IP } from './types'
import React from 'react'

// #endregion Interface Imports

export const P: React.FC<IP.IProps> = ({ copyText, level }) => {
  return <StyledP level={level}>{copyText}</StyledP>
}
