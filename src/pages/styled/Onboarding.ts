// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'h-full p-2 pb-16 mt-12',
})`
  // background-color: ${({ theme }) => theme.colors.tertiary2};
`

Container.displayName = 'OnboardingContainer'
