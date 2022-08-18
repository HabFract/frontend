// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const OnboardingFormContainer = styled.div.attrs({
  className: 'flex flex-col justify-between w-full bg-blue-200',
})``
// background-color: ${({ theme }) => theme.colors.tertiaryMain};

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const ImageUploadContainer = styled.div.attrs({
  className: 'flex items-center justify-center',
})``

ImageUploadContainer.displayName = 'ImageUploadContainer'

export const MakePublicContainer = styled.div.attrs({
  className: 'flex flex-col',
})``

MakePublicContainer.displayName = 'MakePublicContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className: 'absolute inset-x-0 bottom-0',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
