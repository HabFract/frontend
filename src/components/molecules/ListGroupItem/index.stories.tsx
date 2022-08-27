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
    iconName="cog"
    primaryText="Hello, world!"
    secondaryText="This is a list item"
  ></ListGroupItem>
)
