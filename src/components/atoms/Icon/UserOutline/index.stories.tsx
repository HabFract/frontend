// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { UserOutline } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IUserOutline } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: UserOutline,
  title: 'Design System/Atoms/Icon/UserOutline',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IUserOutline.IProps> = (args) => <UserOutline {...args} />

export const Default = Template.bind({})
Default.args = { rounded: true }
