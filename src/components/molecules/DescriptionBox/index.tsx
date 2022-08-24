// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { DescriptionBoxContainer } from './styled'
import { OnboardingStageChip } from '../Chip/OnboardingStageChip'
import { P } from '@/atoms/Typo/Copy/P'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
// #endregion Local Imports

// #region Interface Imports
import { IDescriptionBox } from './types'
import { CenteringFlexHorizontal } from '@/pages/styled'
// #endregion Interface Imports

export const DescriptionBox: React.FunctionComponent<IDescriptionBox.IProps> =
  ({ stage, title, copyText }: IDescriptionBox.IProps) => {
    return (
      <DescriptionBoxContainer>
        <OnboardingStageChip onBoardingStage={stage} chipText={title} />
        <CenteringFlexHorizontal>
          <div className="px-2">
            <P copyText={copyText} level={1} />
          </div>
          <ColoredSvg
            className="text-primary-500 dark:text-primary-100"
            iconName="user"
            rounded={true}
          />
        </CenteringFlexHorizontal>
      </DescriptionBoxContainer>
    )
  }
