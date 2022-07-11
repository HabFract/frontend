// #region Global Imports
import { Heading } from '@/atoms/Typo/Title/Heading'
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IOnboardingStageChip } from './types'
// #endregion Interface Imports

export const OnboardingStageChip: React.FC<IOnboardingStageChip.IProps> = ({
  chipText,
  onBoardingStage,
}) => {
  return (
    <Container>
      <Heading level={4} caps={true}>
        {`${onBoardingStage}`}/5
      </Heading>
      <Heading level={4} caps={true}>
        {chipText}
      </Heading>
    </Container>
  )
}
