// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { Avatar } from '.' // #endregion Local Imports

// #region Interface Imports
import { IAvatar } from './types'
// #endregion Interface Imports

export default {
  component: Avatar,
  title: 'Design System/Atoms/Icon/Avatar',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IAvatar.IProps> = (args) => <Avatar {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
