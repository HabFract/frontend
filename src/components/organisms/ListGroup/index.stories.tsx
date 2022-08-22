// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroup } from '.'
import { ListGroupItem } from '@/molecules/ListGroupItem'
import icon from 'src/assets/svg/Icons/question-mark-circle.svg'
// #endregion Local Imports

export default {
  component: ListGroup,
  title: 'Design System/Organisms/ListGroup',
}

export const Default = () => (
  <ListGroup>
    <ListGroupItem
      iconUrl={icon}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
    <ListGroupItem
      iconUrl={icon}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
    <ListGroupItem
      iconUrl={icon}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
  </ListGroup>
)
