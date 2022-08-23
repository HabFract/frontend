// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className:
    'place-items-center grid h-auto w-8 m:w-12  dark:hover:bg-gray-900 hover:bg-gray-100 hover:bg-gray-100-transparent text-primary-900 active:text-primary-100 dark:text-primary-200 dark:active:text-primary-600',
})`
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
  border-radius: ${({ rounded }) => (rounded ? '3rem' : '0')};
`

IconContainer.displayName = 'IconContainer'
