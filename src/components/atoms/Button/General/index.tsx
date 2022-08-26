// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { ButtonContainer } from './styled'
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
  return (
    <ButtonContainer typeOfButton={typeOfButton} size={size} onClick={onClick}>
      <CenteringFlexHorizontal gap={0.5}>
        <span className="flex items-center justify-center">
          <ColoredSvg
            button
            className="w-6 h-6 mr-4 text-gray-600 dark:text-primary-100"
            iconName={iconName}
            rounded={false}
          />
          {text}
        </span>
      </CenteringFlexHorizontal>
    </ButtonContainer>
  )
}
