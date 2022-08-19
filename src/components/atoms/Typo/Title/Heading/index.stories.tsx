// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Heading } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IHeading } from './types'
import { Story } from '@storybook/react'
// #endregion Interface Imports

export default {
  component: Heading,
  title: 'Design System/Atoms/Typo/Heading',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IHeading.IProps> = (args) => <Heading {...args} />

export const H1 = Template.bind({})
H1.args = { level: 1, caps: false }

export const H2 = Template.bind({})
H2.args = { level: 2, caps: false }

export const H3 = Template.bind({})
H3.args = { level: 3, caps: false }

export const H4 = Template.bind({})
H4.args = { level: 4, caps: false }
