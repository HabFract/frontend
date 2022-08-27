// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const OnboardingContextBar = styled.div.attrs({
  className:
    'info-bar hidden lg:static lg:mx-0 px-4 g:px-8 pt-6 lg:h-screen bottom-0 lg:block bg-primary-900/30 rounded-2xl rounded-l-none',
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
      max-width: 3rem !important;
    }

    width: 20% !important;

    @media only screen and (min-width: 1024px) {
      width: 35% !important;
      -webkit-transition: width 1s ease-in-out;
      -moz-transition: width 1s ease-in-out;
      -o-transition: width 1s ease-in-out;
      transition: width 1s ease-in-out padding-left 1s ease-in-out,
        padding-right 1s ease-in-out;
    }

    .info-list {
      display: block !important;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 8.5rem !important;
  }
`
OnboardingContextBar.displayName = 'OnboardingContextBar'

export const OnboardingFormContainer = styled.div.attrs({
  className:
    'flex flex-col justify-between w-full lg:h-3/4 xl:h-full bg-gray-100/80 dark:bg-gray-800-transparent px-2 xl:px-8 md:py-0',
})``

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className:
    'absolute inset-x-0 dark:bg-primary-800 bottom-0 px-2 md:px-4 lg:bg-transparent',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
