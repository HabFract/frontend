// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ListGroup } from '.'
import { ListGroupItem } from '@/molecules/ListGroupItem'
// #endregion Local Imports

export default {
  component: ListGroup,
  title: 'Design System/Organisms/ListGroup',
}

export const Default = () => (
  <ListGroup>
    <ListGroupItem
      iconName={'cog'}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
    <ListGroupItem
      iconName={'cog'}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
    <ListGroupItem
      iconName={'cog'}
      primaryText="Hello, world!"
      secondaryText="This is a list item"
    ></ListGroupItem>
  </ListGroup>
)
