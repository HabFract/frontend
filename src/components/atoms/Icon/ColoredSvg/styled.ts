// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className:
    'place-items-center grid h-auto w-8 m:w-12 text-primary-900 dark:text-primary-200',
})`
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
  border-radius: ${({ rounded }) => (rounded ? '3rem' : '0')};
`

IconContainer.displayName = 'IconContainer'
