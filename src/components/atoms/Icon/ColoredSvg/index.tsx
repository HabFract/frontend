// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { IconContainer } from './styled'
// #endregion Local Imports

// #region Interface Imports
import { IColoredSvg } from './types'
// #endregion Interface Imports

const getPath = (iconName) => {
  switch (iconName) {
    case 'cog':
      return (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M18.884 5.072c-.608-2.496-4.16-2.496-4.768 0a2.45 2.45 0 0 1-3.658 1.517c-2.195-1.338-4.707 1.174-3.37 3.37a2.453 2.453 0 0 1-1.514 3.659c-2.498.606-2.498 4.16 0 4.764a2.452 2.452 0 0 1 1.515 3.66c-1.338 2.195 1.174 4.707 3.37 3.37a2.451 2.451 0 0 1 3.659 1.514c.606 2.498 4.16 2.498 4.764 0a2.454 2.454 0 0 1 3.66-1.515c2.195 1.338 4.707-1.174 3.37-3.37a2.453 2.453 0 0 1 1.514-3.659c2.498-.606 2.498-4.16 0-4.764a2.45 2.45 0 0 1-1.515-3.66c1.338-2.195-1.174-4.707-3.37-3.37a2.451 2.451 0 0 1-3.659-1.514l.002-.002ZM16.5 20.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
          clipRule="evenodd"
        />
      )
    case 'question-mark':
      return (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M29.3 16a12.8 12.8 0 1 1-25.6 0 12.8 12.8 0 0 1 25.6 0Zm-12.8-4.8a1.6 1.6 0 0 0-1.387.8 1.6 1.6 0 1 1-2.77-1.6 4.8 4.8 0 1 1 5.757 6.928v.272a1.6 1.6 0 0 1-3.2 0V16a1.6 1.6 0 0 1 1.6-1.6 1.6 1.6 0 0 0 0-3.2Zm0 12.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"
          clipRule="evenodd"
        />
      )
    case 'speakerphone':
      return (
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M29.3 4.8a1.599 1.599 0 0 0-2.315-1.43L14.52 9.6H8.5a4.8 4.8 0 1 0 0 9.6h.448l2.834 8.506A1.6 1.6 0 0 0 13.3 28.8h1.6a1.6 1.6 0 0 0 1.6-1.6v-7.011l10.485 5.241A1.6 1.6 0 0 0 29.3 24V4.8Z"
          clipRule="evenodd"
        />
      )
    case 'user':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={2}
        />
      )
    case 'back':
      return (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          fill="currentColor"
          strokeWidth={2}
        />
      )
  }
}

const getViewBox = (iconName) => {
  switch (true) {
    case ['user', 'back'].includes(iconName):
      return '0 0 24 24'
    default:
      return '0 0 33 32'
  }
}

export const ColoredSvg: React.FC<IColoredSvg.IProps> = ({
  iconName,
  className,
}) => {
  return (
    <IconContainer>
      <svg
        viewBox={getViewBox(iconName)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {getPath(iconName)}
      </svg>
    </IconContainer>
  )
}
