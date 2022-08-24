// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { TextInput } from '.'
// #endregion Local Imports

// #region Interface Imports
import { ITextInput } from './types'
// #endregion Interface Imports

export default {
  component: TextInput,
  title: 'Design System/Atoms/Input/TextInput',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<ITextInput.IProps> = (args) => <TextInput {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
