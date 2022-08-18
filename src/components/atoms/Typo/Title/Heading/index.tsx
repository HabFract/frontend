// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { H1, H2, H3, H4 } from './styled'
// #endregion Local Imports
// #region Interface Imports
import { IHeading } from './types'
import React from 'react'

// #endregion Interface Imports

export const Heading: React.FC<IHeading.IProps> = ({
  level,
  caps = false,
  children,
}) => {
  switch (level) {
    case 1:
      return <H1 caps={caps}>{children}</H1>
    case 2:
      return <H2 caps={caps}>{children}</H2>
    case 3:
      return <H3 caps={caps}>{children}</H3>
    case 4:
      return <H4 caps={caps}>{children}</H4>
    default:
      return <H1 caps={caps}>{children}</H1>
  }
}
