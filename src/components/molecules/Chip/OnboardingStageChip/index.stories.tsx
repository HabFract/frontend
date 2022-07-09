// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { OnboardingStageChip } from '.' // #endregion Local Imports
// #endregion Local Imports

// #region Interface Imports
import { IOnboardingStageChip } from './types'
// #endregion Interface Imports

export default {
  component: OnboardingStageChip,
  title: 'Design System/Molecules/Button/OnboardingStageChip',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IOnboardingStageChip.IProps> = (args) => (
  <OnboardingStageChip {...args} />
)

export const Default = Template.bind({})
// Default.args = { todo: aTodo() }
