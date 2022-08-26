// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const OnboardingContent = styled.div.attrs({
  className: '',
})``

OnboardingContent.displayName = 'OnboardingOnboardingContent'

export const OnboardingContextBar = styled.div.attrs({
  className:
    'hidden w-1/4 lg:w-1/2 xl:w-1/3 lg:static lg:mx-0 p-8 pt-6 lg:h-screen bottom-0 lg:block bg-primary-900 rounded-2xl rounded-l-none',
})`
  @media only screen and (min-width: 1024px) {
    margin-top: 9rem !important;
  }
`

OnboardingContextBar.displayName = 'OnboardingContextBar'
