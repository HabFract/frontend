// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'h-full p-4 pb-16 mt-12 overflow-auto',
})`
  background-color: ${({ theme }) => theme.colors.tertiary2};
`

Container.displayName = 'OnboardingContainer'
