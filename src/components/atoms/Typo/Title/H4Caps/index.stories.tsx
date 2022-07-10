// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { H4Caps } from '.' // #endregion Local Imports
// #endregion Local Imports

// #region Interface Imports
import { IH4Caps } from './types'
// #endregion Interface Imports

export default {
  component: H4Caps,
  title: 'Design System/Atoms/Typo/H4Caps',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IH4Caps.IProps> = (args) => <H4Caps {...args} />

export const Default = Template.bind({})
