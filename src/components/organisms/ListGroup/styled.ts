// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const ListGroupContainer = styled.ul.attrs({
  className: '',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

ListGroupContainer.displayName = 'ListGroupContainer'
