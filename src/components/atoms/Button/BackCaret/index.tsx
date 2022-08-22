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
      <button onClick={onClick} className="pb-4">
        <ColoredSvg
          className="w-8 h-8 mb-4 text-gray-600"
          iconName="back"
          rounded={false}
        />
      </button>
    </BackCaretContainer>
  )
}
