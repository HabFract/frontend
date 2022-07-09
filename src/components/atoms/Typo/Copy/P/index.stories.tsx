// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { P } from '.' // #endregion Local Imports

// #region Interface Imports
import { IP } from './types'
// #endregion Interface Imports

export default {
  component: P,
  title: 'Design System/Atoms/Typo/P',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IP.IProps> = (args) => <P {...args} />

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
