// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { ImageUploadInput } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IImageUploadInput } from './types'
import { Story } from '@storybook/react'
import React from 'react'

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
