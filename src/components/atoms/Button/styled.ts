// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

const sizeStyles = (size) => {
  switch (size) {
    case 'sm':
      return {
        width: '4rem',
        max: '6rem',
        'width-md': '100%',
        'max-md': '6rem',
      }
    case 'md':
      return {
        width: '6rem',
        'width-md': '8rem',
        max: '6rem',
        'max-md': '12rem',
      }
    case 'lg':
      return {
        width: '100%',
        max: '6rem',
        'width-md': '12vw',
        'max-md': '10rem',
      }
    default:
      return {
        width: '4.5rem',
        'width-md': '8rem',
        max: '6rem',
        'max-md': '12rem',
      }
  }
}
const colorStyles = (type) => {
  switch (type) {
    case 'primary':
      return {
        bg: '#f16494',
        border: '#f16494',
        text: '#FCFFFC',
        'hover-bg': '#83CFB5',
        'hover-border': '#83CFB5',
        'hover-text': '#000',
      }
    case 'secondary':
      return {
        bg: '#FCFFFC',
        border: '#f16494',
        text: '#f16494',
        'hover-bg': '#FCFFFC',
        'hover-border': '#83CFB5',
        'hover-text': '#06575A',
      }
    case 'warning':
      return {
        bg: '#FAAD14',
        border: '#FAAD14',
        text: '#F3F4F6',
        'hover-bg': '#FFB522',
        'hover-border': '#FFB522',
        'hover-text': '#014451',
      }
    case 'success':
      return {
        bg: '#52d918',
        border: '#52d918',
        text: '#FCFFFC',
        'hover-bg': '#82ef51',
        'hover-border': '#82ef51',
        'hover-text': '#014451',
      }
    case 'error':
      return {
        bg: '#f94a27',
        border: '#f94a27',
        text: '#F3F4F6',
        'hover-bg': '#ff8869',
        'hover-border': '#ff8869',
        'hover-text': '#000',
      }
    default:
      return {
        bg: '#0694A2',
        border: '#0694A2',
        text: '#F3F4F6',
        'hover-bg': '#16BDCA',
        'hover-border': '#16BDCA',
        'hover-text': '#000',
      }
  }
}

export const ButtonContainer = styled.button.attrs({
  type: 'button',
  className: `flex
    items-center
    justify-center
    h-full
    p-2
    text-sm
    font-medium
    text-center
    border-2
    rounded-2xl
    focus:ring-4
    focus:outline-none
    
    h-12
    ml-4
    sm:ml-0
    md:mb-1

    dark:hover:bg-primary-500
    dark:focus:ring-primary-100`,
})`
  width: ${({ size }) => sizeStyles(size)['width']};
  max-width: ${({ size }) => sizeStyles(size)['max']};

  background-color: ${({ typeOfButton }) => colorStyles(typeOfButton)['bg']};
  border-color: ${({ typeOfButton }) => colorStyles(typeOfButton)['border']};
  color: ${({ typeOfButton }) => colorStyles(typeOfButton)['text']};

  @media only screen and (min-width: 600px) {
    width: ${({ size }) => sizeStyles(size)['width-md']};
    max-width: ${({ size }) => sizeStyles(size)['max-md']};
  }

  &:hover {
    transition: background 200ms linear;
    -webkit-transition: background 200ms linear;
    -ms-transition: background 200ms linear;
    * {
      transition: color 100ms linear;
    }

    background-color: ${({ typeOfButton }) =>
      colorStyles(typeOfButton)['hover-bg']};
    border-color: ${({ typeOfButton }) =>
      colorStyles(typeOfButton)['hover-border']};
    color: ${({ typeOfButton }) => colorStyles(typeOfButton)['hover-text']};

    svg {
      color: ${({ typeOfButton }) =>
        colorStyles(typeOfButton)['hover-text']} !important;
    }
  }
`
ButtonContainer.displayName = 'ButtonContainer'
