// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { DescriptionBoxContainer } from './styled'
import { CenteringFlexHorizontal, SpaceFlex } from '@/pages/styled'
import { P, ColoredSvg, Button } from '@/atoms/.'
import { OnboardingStageChip } from '@/molecules/.'
// #endregion Local Imports

// #region Interface Imports
import { IDescriptionBox } from './types'
// #endregion Interface Imports

const iconForStage = (stage) => {
  switch (stage) {
    case 1:
      return 'user'
    case 2:
      return 'add-burner'
    case 3:
      return 'add-habit'
    case 4:
      return 'success'
  }
}

export const DescriptionBox: React.FunctionComponent<IDescriptionBox.IProps> =
  ({ stage, title, copyText, backAction }: IDescriptionBox.IProps) => {
    return (
      <DescriptionBoxContainer>
        <CenteringFlexHorizontal gap={0.5}>
          {backAction && (
            <div className="hidden h-full lg:block">
              <Button
                iconName="return"
                onClick={backAction}
                typeOfButton="secondary"
                size="sm"
                text="Go Back"
                buttonName="back"
              />
            </div>
          )}
          <OnboardingStageChip onBoardingStage={stage} chipText={title} />
        </CenteringFlexHorizontal>
        <SpaceFlex space="around" gap={0.5}>
          <div className="px-2 md:w-3/4">
            <P copyText={copyText} level={1} />
          </div>
          <ColoredSvg
            className="text-primary-500 dark:text-primary-100"
            iconName={iconForStage(stage) as string}
            rounded={true}
          />
        </SpaceFlex>
      </DescriptionBoxContainer>
    )
  }
