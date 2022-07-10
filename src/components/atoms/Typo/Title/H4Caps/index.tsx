// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { StyledH4 } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IH4Caps } from './types'
// #endregion Interface Imports

export const H4Caps: React.FC<IH4Caps.IProps> = ({ children }) => {
  return <StyledH4>{children}</StyledH4>
}
