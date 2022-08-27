// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { GeneralButton, SubmitButton } from './styled'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
// #endregion Local Imports

// #region Interface Imports
import { IButton } from './types'
import { CenteringFlexHorizontal } from '@/pages/styled'
// #endregion Interface Imports

export const Button: React.FC<IButton.IProps> = ({
  text,
  iconName,
  size,
  typeOfButton,
  onClick,
}) => {
  return typeOfButton == 'submit' ? (
    <SubmitButton typeOfButton={'primary'} size={size}>
      <CenteringFlexHorizontal gap={0.5}>
        <span className="flex items-center justify-center">
          <ColoredSvg
            button
            className={size !== 'sm' ? 'w-6 h-6 mr-4' : 'w-4 h-4 mr-0 xl:mr-2'}
            iconName={iconName}
            rounded={false}
          />
          <span className={size !== 'sm' ? 'block' : 'hidden xl:block'}>
            {text}
          </span>
        </span>
      </CenteringFlexHorizontal>
    </SubmitButton>
  ) : (
    <GeneralButton typeOfButton={typeOfButton} size={size} onClick={onClick}>
      <CenteringFlexHorizontal gap={0.5}>
        <span className="flex items-center justify-center">
          <ColoredSvg
            button
            className={size !== 'sm' ? 'w-6 h-6 mr-4' : 'w-4 h-4 mr-0 xl:mr-2'}
            iconName={iconName}
            rounded={false}
          />
          <span className={size !== 'sm' ? 'block' : 'hidden xl:block'}>
            {text}
          </span>
        </span>
      </CenteringFlexHorizontal>
    </GeneralButton>
  )
}
