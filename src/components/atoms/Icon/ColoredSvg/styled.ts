// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className:
    'place-items-center grid h-auto text-primary-900 dark:text-primary-200',
})`
  width: ${({ button }) => (button ? 'auto' : '4rem')};
  max-width: ${({ button }) => (button ? '4rem' : '4rem')};
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
  border-radius: ${({ rounded }) => (rounded ? '3rem' : '0')};
`

IconContainer.displayName = 'IconContainer'
