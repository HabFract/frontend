// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { OnboardingStageChip } from '.'
// #endregion Local Imports
// #endregion Local Imports
// #region Interface Imports
import { IOnboardingStageChip } from './types'
import { Story } from '@storybook/react'
import React from 'react'

// #endregion Interface Imports

export default {
  component: OnboardingStageChip,
  title: 'Design System/Molecules/Chip/OnboardingStageChip',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IOnboardingStageChip.IProps> = (args) => (
  <OnboardingStageChip {...args} />
)

export const Default = Template.bind({})
Default.args = { chipText: 'Do an action', onBoardingStage: 2 }
