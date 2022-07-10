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
  copyText,
}: IPageAction.IProps) => {
  return (
    <Container>
      <Title>
        <OnboardingStageChip
          onBoardingStage={1}
          chipText={'Create a profile'}
        />
        {/* // TODO: generalise */}
      </Title>
      <Body>
        <P>{copyText}</P>
        <UserOutline rounded={true} />
      </Body>
    </Container>
  )
}
