// #region Global Imports
import { isDark } from '@/app/utils/general'
import styled from 'styled-components'
// #endregion Global Imports

const sizeStyles = (size) => {
  switch (size) {
    case 'sm':
      return {
        width: '4rem',
        max: '6rem',
        'width-md': '100%',
        'max-md': '3rem',
        'max-lg': '5rem',
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
        bg: '#eb2265',
        'dark:bg': '#014451',
        'dark:hover-bg': '#83f1c2',
        'dark:hover-border': '#83CFB5',
        'dark:text': '#FCFFFC',
        iconText: '#FCFFFC',
        border: '#eb2265',
        text: '#FCFFFC',
        'hover-bg': '#83CFB5',
        'hover-border': '#83CFB5',
        'hover-text': '#000',
      }
    case 'secondary':
      return {
        bg: '#FCFFFC',
        border: '#eb2265',
        text: '#eb2265',
        'dark:bg': '#014451',
        'dark:hover-bg': '#83f1c2',
        'dark:hover-border': '#83CFB5',
        'dark:text': '#FCFFFC',
        iconText: '#eb2265',
        'hover-bg': '#FCFFFC',
        'hover-border': '#83CFB5',
        'hover-text': '#06575A',
      }
    case 'warning':
      return {
        bg: '#FAAD14',
        border: '#FAAD14',
        text: '#F3F4F6',
        'dark:bg': '#014451',
        'dark:hover-bg': '#83f1c2',
        'dark:hover-border': '#83CFB5',
        'dark:text': '#FCFFFC',
        iconText: '#FCFFFC',
        'hover-bg': '#FFB522',
        'hover-border': '#FFB522',
        'hover-text': '#014451',
      }
    case 'success':
      return {
        bg: '#52d918',
        border: '#52d918',
        text: '#FCFFFC',
        'dark:bg': '#014451',
        'dark:hover-bg': '#83f1c2',
        'dark:hover-border': '#83CFB5',
        'dark:text': '#FCFFFC',
        iconText: '#FCFFFC',
        'hover-bg': '#82ef51',
        'hover-border': '#82ef51',
        'hover-text': '#014451',
      }
    case 'error':
      return {
        bg: '#f94a27',
        border: '#f94a27',
        text: '#F3F4F6',
        'dark:bg': '#014451',
        'dark:hover-bg': '#83f1c2',
        'dark:hover-border': '#83CFB5',
        'dark:text': '#FCFFFC',
        iconText: '#FCFFFC',
        'hover-bg': '#ff8869',
        'hover-border': '#ff8869',
        'hover-text': '#000',
      }
    default:
      return {
        bg: '#0694A2',
        border: '#0694A2',
        text: '#F3F4F6',
        iconText: '#FCFFFC',
        'hover-bg': '#16BDCA',
        'hover-border': '#16BDCA',
        'hover-text': '#000',
      }
  }
}

export const ButtonContainer = styled.button.attrs({
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
    
    md:mb-1
    h-12
    ml-4
    sm:ml-0

    dark:hover:bg-primary-500
    dark:focus:ring-primary-100`,
})`
  width: ${({ size }) => sizeStyles(size)['width']};
  max-width: ${({ size }) => sizeStyles(size)['max']};

  background-color: ${({ typeOfButton }) =>
    colorStyles(typeOfButton)[isDark() ? 'dark:bg' : 'bg']};
  border-color: ${({ typeOfButton }) =>
    colorStyles(typeOfButton)[isDark() ? 'dark:border' : 'border']};
  color: ${({ typeOfButton }) =>
    colorStyles(typeOfButton)[isDark() ? 'dark:text' : 'text']};

  @media only screen and (min-width: 600px) {
    width: ${({ size }) => sizeStyles(size)['width-md']};
    max-width: ${({ size }) => sizeStyles(size)['max-md']};
  }
  @media only screen and (min-width: 1024px) {
    max-width: ${({ size }) =>
      sizeStyles(size)['max-lg'] || sizeStyles(size)['max-md']};
  }

  svg {
    color: ${({ typeOfButton }) =>
      colorStyles(typeOfButton)['iconText']} !important;
  }

  &:hover {
    transition: background 200ms linear;
    -webkit-transition: background 200ms linear;
    -ms-transition: background 200ms linear;
    * {
      transition: color 100ms linear;
    }

    background-color: ${({ typeOfButton }) =>
      colorStyles(typeOfButton)[isDark() ? 'dark:hover-bg' : 'hover-bg']};
    border-color: ${({ typeOfButton }) =>
      colorStyles(typeOfButton)[
        isDark() ? 'dark:hover-border' : 'hover-border'
      ]};
    color: ${({ typeOfButton }) => colorStyles(typeOfButton)['hover-text']};

    svg {
      color: ${({ typeOfButton }) =>
        colorStyles(typeOfButton)['hover-text']} !important;
    }
  }
`
ButtonContainer.displayName = 'ButtonContainer'

export const GeneralButton = styled(ButtonContainer).attrs({
  type: 'button',
})``

export const SubmitButton = styled(ButtonContainer).attrs({
  type: 'submit',
})``
