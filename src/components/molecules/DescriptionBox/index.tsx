// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { DescriptionBoxContainer } from './styled'
import { CenteringFlexHorizontal } from '@/pages/styled'
import { P, ColoredSvg, Button } from '@/atoms/.'
import { OnboardingStageChip } from '@/molecules/.'
// #endregion Local Imports

// #region Interface Imports
import { IDescriptionBox } from './types'
// #endregion Interface Imports

export const DescriptionBox: React.FunctionComponent<IDescriptionBox.IProps> =
  ({ stage, title, copyText, backAction }: IDescriptionBox.IProps) => {
    return (
      <DescriptionBoxContainer>
        <CenteringFlexHorizontal gap={0.5}>
          {backAction && (
            <div className="hidden h-full mt-3 lg:block">
              <Button
                iconName="return"
                onClick={backAction}
                typeOfButton="secondary"
                size="sm"
                text="Home"
              />
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
