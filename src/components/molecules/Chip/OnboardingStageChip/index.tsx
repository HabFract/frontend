// #region Global Imports
import { H4Caps } from '@/atoms/Typo/Title/H4Caps'
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
      <H4Caps>{`${onBoardingStage}`}/5</H4Caps>
      <H4Caps>{chipText}</H4Caps>
    </Container>
  )
}
