// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroupItem } from '.'
import icon from 'src/assets/svg/Icons/question-mark-circle.svg'
// #endregion Local Imports

export default {
  component: ListGroupItem,
  title: 'Design System/Molecules/ListGroupItem',
}

export const Default = () => (
  <ListGroupItem
    iconUrl={icon}
    primaryText="Hello, world!"
    secondaryText="This is a list item"
  ></ListGroupItem>
)
