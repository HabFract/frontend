// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const TitleBarContainer = styled.div.attrs({
  className: 'md:hidden absolute top-0 inset-x-0 p-4 pb-2',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

TitleBarContainer.displayName = 'TitleBarContainer'
