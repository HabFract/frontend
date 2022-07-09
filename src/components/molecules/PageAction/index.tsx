// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { IPageAction } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container, Body, Title } from './styled'
import { P } from '@/atoms/Typo/Copy/P'
import { Avatar } from '@/atoms/Icon/Avatar'
import { OnboardingStageChip } from '../Chip/OnboardingStageChip'
// #endregion Local Imports

export const PageAction: React.FunctionComponent<IPageAction.IProps> = ({
  copyText,
}: IPageAction.IProps) => {
  return (
    <Container>
      <Title>
        <OnboardingStageChip />
      </Title>
      <Body>
        <P>{copyText}</P>
        <Avatar />
      </Body>
    </Container>
  )
}
