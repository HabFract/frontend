// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { ColoredSvg } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IColoredSvg } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: ColoredSvg,
  title: 'Design System/Atoms/Icon/ColoredSvg',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IColoredSvg.IProps> = (args) => <ColoredSvg {...args} />

export const Default = Template.bind({})
Default.args = { rounded: true }
