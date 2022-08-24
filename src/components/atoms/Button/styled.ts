// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const ButtonContainer = styled.button.attrs({
  className:
    'h-full w-full text-white border-2 hover:border-primary-500/90 hover:bg-primary-500/90 border-primary-500  bg-primary-600 hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none rounded-2xl focus:ring-[#FF9119]/50 font-medium text-sm flex justify-center w-18 md:w-32 py-2 text-center items-center px-2 md:mb-1 ml-4 sm:ml-0 dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40',
})`
  max-width: 6rem;
  @media only screen and (min-width: 600px) {
    max-width: 12rem;
  }

  &:hover {
    svg {
      color: ${({ hoverColor }) => `${hoverColor}`} !important;
    }
  }
`

ButtonContainer.displayName = 'ButtonContainer'

export const ButtonContainerOutlined = styled.button.attrs({
  className:
    'flex items-center justify-center w-full h-full px-2 py-2 ml-4 text-sm font-medium text-center bg-transparent border-2 md:mb-1 sm:ml-0 w-18 md:w-32 text-primary-600 border-primary-500 hover:text-gray-100 hover:bg-primary-500 focus:ring-4 focus:outline-none rounded-2xl focus:ring-primary-50 dark:hover:bg-primary-500 dark:focus:ring-primary-100',
})`
  max-width: 6rem;
  @media only screen and (min-width: 600px) {
    max-width: 12rem;
  }
  &:hover {
    svg {
      color: ${({ hoverColor }) => `${hoverColor}`} !important;
    }
  }
`

ButtonContainerOutlined.displayName = 'ButtonContainerOutlined'
