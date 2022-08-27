// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { TextAreaInput } from '.'
// #endregion Local Imports

// #region Interface Imports
import { ITextAreaInput } from './types'
// #endregion Interface Imports

export default {
  component: TextAreaInput,
  title: 'Design System/Atoms/Input/TextAreaInput',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<ITextAreaInput.IProps> = (args) => (
  <TextAreaInput {...args} />
)

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
