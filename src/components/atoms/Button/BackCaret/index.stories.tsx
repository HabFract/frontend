// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { BackCaret } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IBackCaret } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: BackCaret,
  title: 'Design System/Atoms/Button/BackCaret',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IBackCaret.IProps> = (args) => <BackCaret {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
