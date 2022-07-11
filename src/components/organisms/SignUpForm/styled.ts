// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const OnboardingFormContainer = styled.div.attrs({
  className: 'bg-blue-200 w-full flex flex-col justify-between',
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
  className: 'absolute bottom-0 inset-x-0',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'
