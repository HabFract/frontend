// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { H2 } from '.' // #endregion Local Imports

// #region Interface Imports
import { IH2 } from './types'
// #endregion Interface Imports

export default {
  component: H2,
  title: 'H2',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IH2.IProps> = (args) => <H2 {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
