// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { IDescriptionBox } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container, Body, Title } from './styled'
import { P } from '@/atoms/Typo/Copy/P'
import { UserOutline } from '@/atoms/Icon/UserOutline'
import { OnboardingStageChip } from '../Chip/OnboardingStageChip'
// #endregion Local Imports

export const DescriptionBox: React.FunctionComponent<IDescriptionBox.IProps> =
  ({ stage, title, copyText }: IDescriptionBox.IProps) => {
    return (
      <Container>
        <Title>
          <OnboardingStageChip onBoardingStage={stage} chipText={title} />
        </Title>
        <Body>
          <P copyText={copyText} />
          <UserOutline rounded={true} />
        </Body>
      </Container>
    )
  }
