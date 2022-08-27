// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const OnboardingContextBar = styled.div.attrs({
  className:
    'hidden w-1/4 lg:w-1/2 xl:w-1/3 lg:static lg:mx-0 p-8 pt-6 lg:h-screen bottom-0 lg:block bg-primary-900 rounded-2xl rounded-l-none',
})`
  @media only screen and (min-width: 1024px) {
    margin-top: 9rem !important;
  }
`
OnboardingContextBar.displayName = 'OnboardingContextBar'

export const OnboardingFormContainer = styled.div.attrs({
  className:
    'flex flex-col justify-between w-full lg:h-3/4 xl:h-full bg-gray-100/80 dark:bg-gray-800-transparent md:px-8 md:py-0',
})``

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className:
    'absolute inset-x-0 dark:bg-primary-800 bottom-0 px-2 md:px-4 lg:background-transparent',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
