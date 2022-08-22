// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { BackCaretContainer } from './styled'
import { ColoredSvg } from '@/atoms/Icon/ColoredSvg'
// #endregion Local Imports

// #region Interface Imports
import { IBackCaret } from './types'
// #endregion Interface Imports

export const BackCaret: React.FC<IBackCaret.IProps> = ({ onClick }) => {
  return (
    <BackCaretContainer>
      <button onClick={onClick}>
        <ColoredSvg
          className="text-primary-500"
          iconName="back"
          rounded={false}
        />
      </button>
    </BackCaretContainer>
  )
}
