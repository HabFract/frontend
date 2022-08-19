// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const ListGroupItemContainer = styled.li.attrs({
  className: '',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

ListGroupItemContainer.displayName = 'ListGroupItemContainer'
