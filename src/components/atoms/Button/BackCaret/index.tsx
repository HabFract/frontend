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
      <button
        type="button"
        onClick={onClick}
        className="grid place-content-center"
      >
        <ColoredSvg
          className="w-8 h-8 text-gray-600"
          iconName="back"
          rounded={false}
        />
      </button>
    </BackCaretContainer>
  )
}
