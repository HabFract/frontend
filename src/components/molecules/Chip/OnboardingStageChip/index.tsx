// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ChipContainer } from './styled'
import { Heading } from '@/atoms/Typo/Title/Heading'
// #endregion Local Imports

// #region Interface Imports
import { IOnboardingStageChip } from './types'
// #endregion Interface Imports

export const OnboardingStageChip: React.FC<IOnboardingStageChip.IProps> = ({
  chipText,
  onBoardingStage,
}) => {
  return (
    <ChipContainer>
      <Heading level={3} caps={true}>
        {`${onBoardingStage}`}/5
      </Heading>
      <div className="px-4">
        <Heading level={2} caps={false}>
          {chipText}
        </Heading>
      </div>
    </ChipContainer>
  )
}
