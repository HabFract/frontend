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
import { ButtonContainer } from '@/atoms/Button/styled'
// #endregion Interface Imports

export const DescriptionBox: React.FunctionComponent<IDescriptionBox.IProps> =
  ({ stage, title, copyText, backAction }: IDescriptionBox.IProps) => {
    return (
      <DescriptionBoxContainer>
        <CenteringFlexHorizontal gap={0.5}>
          {backAction && (
            <div className="hidden h-full lg:block">
              <ButtonContainer
                typeOfButton="secondary"
                size="sm"
                hoverColor="white"
                onClick={backAction}
              >
                <CenteringFlexHorizontal gap={0.5}>
                  <ColoredSvg
                    button
                    iconName="return"
                    className="w-6 h-6 xl:mr-2 text-primary-500"
                    rounded={false}
                  ></ColoredSvg>
                  <span className="hidden xl:block">Home</span>
                </CenteringFlexHorizontal>
              </ButtonContainer>
            </div>
          )}
          <OnboardingStageChip onBoardingStage={stage} chipText={title} />
        </CenteringFlexHorizontal>
        <CenteringFlexHorizontal gap={2}>
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
