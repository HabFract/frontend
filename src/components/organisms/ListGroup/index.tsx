// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroupContainer } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IListGroup } from './types'
// #endregion Interface Imports

export const ListGroup: React.FunctionComponent<IListGroup.IProps> = ({
  children,
}: IListGroup.IProps) => {
  return <ListGroupContainer>{children}</ListGroupContainer>
}
