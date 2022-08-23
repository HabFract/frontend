// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const TitleBarContainer = styled.div.attrs({
  className: 'md:hidden inset-x-0 h-12 dark:bg-primary-800 pr-4',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

TitleBarContainer.displayName = 'TitleBarContainer'
