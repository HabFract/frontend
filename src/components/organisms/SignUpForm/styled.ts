// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const OnboardingFormContainer = styled.div.attrs({
  className:
    'flex flex-col justify-between w-full bg-gray-100 dark:bg-gray-800-transparent',
})``

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const ImageUploadContainer = styled.div.attrs({
  className: 'flex items-center justify-around',
})``

ImageUploadContainer.displayName = 'ImageUploadContainer'

export const MakePublicContainer = styled.div.attrs({
  className: 'flex flex-col',
})``

MakePublicContainer.displayName = 'MakePublicContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className: 'absolute inset-x-0 px-4 md:hidden dark:bg-primary-800',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
  bottom: 56px;
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
