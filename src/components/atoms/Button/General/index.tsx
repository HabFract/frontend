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
import { Heading } from '../..'
// #endregion Interface Imports

export const Button: React.FC<IButton.IProps> = ({
  buttonName,
  text,
  iconName,
  size,
  typeOfButton,
  onClick,
}) => {
  return typeOfButton == 'submit' ? (
    <SubmitButton name={buttonName} typeOfButton={'primary'} size={size}>
      <span className="flex items-center justify-center">
        <ColoredSvg
          button
          className={size !== 'sm' ? 'w-6 h-6 mr-4' : 'w-4 h-4 mr-0 xl:mr-2'}
          iconName={iconName}
          rounded={false}
        />
        <span className={size !== 'sm' ? 'block' : 'hidden xl:block'}>
          <Heading caps={true} level={3}>
            {text}
          </Heading>
        </span>
      </span>
    </SubmitButton>
  ) : (
    <GeneralButton
      name={buttonName}
      typeOfButton={typeOfButton}
      size={size}
      onClick={onClick}
    >
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
    </GeneralButton>
  )
}
