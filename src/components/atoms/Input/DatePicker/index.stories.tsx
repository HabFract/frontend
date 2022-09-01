// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { DatePickerInput } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IDatePickerInput } from './types'
// #endregion Interface Imports

export default {
  component: DatePickerInput,
  title: 'Design System/Atoms/Input/DatePickerInput',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IDatePickerInput.IProps> = (args) => (
  <DatePickerInput {...args} />
)

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
