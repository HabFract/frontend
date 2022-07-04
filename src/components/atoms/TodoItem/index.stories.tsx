// #region Global Imports
import React from 'react'
import {Story} from "@storybook/react";
// #endregion Global Imports

// #region Local Imports
import { TodoItem } from '.'
// #endregion Local Imports

// #region Interface Imports
import { ITodoItem } from './types'
// import { aTodo } from '@graphql/generated/mocks'
// #endregion Interface Imports

export default {
  component: TodoItem,
  title: 'TodoItem',
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ITodoItem.IProps> = (args) => 
  <TodoItem {...args} />

export const Default = Template.bind({});
// Default.args = { rounded: true, description: aTodo().id, type: ITodoItem.Type.Primary }