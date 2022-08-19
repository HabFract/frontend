// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { P } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IP } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: P,
  title: 'Design System/Atoms/Typo/P',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IP.IProps> = (args) => <P {...args} />

export const Default = Template.bind({})
Default.args = { copyText: 'What a lovely paragraph this is.' }
