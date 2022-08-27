// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { ImageUploadInput } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IImageUploadInput } from './types'
// #endregion Interface Imports

export default {
  component: ImageUploadInput,
  title: 'Design System/Atoms/Input/ImageUploadInput',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IImageUploadInput.IProps> = (args) => (
  <ImageUploadInput {...args} />
)

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
