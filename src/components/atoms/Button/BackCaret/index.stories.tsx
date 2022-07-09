// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { BackCaret } from '.' // #endregion Local Imports

// #region Interface Imports
import { IBackCaret } from './types'
// #endregion Interface Imports

export default {
  component: BackCaret,
  title: 'Design System/Atoms/Button/BackCaret',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IBackCaret.IProps> = (args) => <BackCaret {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
