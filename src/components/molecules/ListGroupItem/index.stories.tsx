// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroupItem } from '.'
// #endregion Local Imports

export default {
  component: ListGroupItem,
  title: 'Design System/Molecules/ListGroupItem',
}

export const Default = () => (
  <ListGroupItem
    primaryText="Why"
    secondaryText="Design System/Molecules/ListGroupItem"
    iconUrl=""
  />
)
