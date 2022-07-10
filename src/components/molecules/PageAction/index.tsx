// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { IPageAction } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container, Body, Title } from './styled'
import { P } from '@/atoms/Typo/Copy/P'
import { UserOutline } from '@/atoms/Icon/UserOutline'
import { OnboardingStageChip } from '../Chip/OnboardingStageChip'
// #endregion Local Imports

export const PageAction: React.FunctionComponent<IPageAction.IProps> = ({
  title,
  copyText,
}: IPageAction.IProps) => {
  return (
    <Container>
      <Title>
        <OnboardingStageChip onBoardingStage={1} chipText={title} />
        {/* // TODO: generalise */}
      </Title>
      <Body>
        <P copyText={copyText} />
        <UserOutline rounded={true} />
      </Body>
    </Container>
  )
}
