// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { SwitchInput } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { ISwitchInput } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: SwitchInput,
  title: 'Design System/Atoms/Input/SwitchInput',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<ISwitchInput.IProps> = (args) => <SwitchInput {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
