// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { Button } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IButton } from './types'
// #endregion Interface Imports

export default {
  component: Button,
  title: 'Design System/Atoms/Button/Button',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IButton.IProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
