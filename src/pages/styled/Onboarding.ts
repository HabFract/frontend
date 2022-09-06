// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const OnboardingContextBar = styled.div.attrs({
  className:
    'info-bar hidden lg:static lg:mx-0 px-4 g:px-8 pt-6 lg:h-screen bottom-0 lg:block bg-gray-800/10 rounded-2xl rounded-l-none',
})`
  &.open {
    padding: 1.5rem 1rem !important;

    .info-bar-label {
      display: block !important;
    }
    > div {
      justify-content: space-between !important;
    }
    button {
      max-width: 4rem !important;
    }

    width: 20% !important;

    @media only screen and (min-width: 1024px) {
      margin-left: -1rem;
      width: 30% !important;
    }

    .info-list {
      display: block !important;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 9.5rem !important;
  }

  @media only screen and (min-width: 1680px) {
    margin-top: 9.5rem !important;
  }
`
OnboardingContextBar.displayName = 'OnboardingContextBar'

export const OnboardingFormContainer = styled.div.attrs({
  className:
    'flex flex-col justify-between w-full lg:h-3/4 xl:h-full bg-gray-100/80 dark:bg-gray-800-transparent px-2 xl:px-8 md:py-0',
})``

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className: 'absolute inset-x-0 dark:bg-primary-800 bottom-0 px-2 md:px-4',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
