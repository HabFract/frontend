// #region Global Imports
import { OnboardingStageChip } from '../Chip/OnboardingStageChip'
// #endregion Interface Imports
// #region Local Imports
import { Container, Body, Title } from './styled'
// #endregion Global Imports
// #region Interface Imports
import { IDescriptionBox } from './types'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
import { P } from '@/atoms/Typo/Copy/P'
import React from 'react'

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
          <ColoredSvg
            className="text-primary-500"
            iconName="user"
            rounded={true}
          />
        </Body>
      </Container>
    )
  }
