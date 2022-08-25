// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const OnboardingFormContainer = styled.div.attrs({
  className:
    'flex flex-col justify-between w-full lg:h-full bg-gray-100 dark:bg-gray-800-transparent',
})``

OnboardingFormContainer.displayName = 'OnboardingFormContainer'

export const ImageUploadContainer = styled.div.attrs({
  className: 'flex items-center justify-around',
})``

ImageUploadContainer.displayName = 'ImageUploadContainer'

export const MakePublicContainer = styled.div.attrs({
  className: 'flex flex-col py-4 items-center',
})``

MakePublicContainer.displayName = 'MakePublicContainer'

export const OnboardingProgressBarContainer = styled.div.attrs({
  className: 'absolute inset-x-0 px-4 md:hidden dark:bg-primary-800 bottom-0',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
OnboardingProgressBarContainer.displayName = 'OnboardingProgressBarContainer'

export const Label = styled.span.attrs({
  className: 'block font-display font-medium dark:text-gray-300 text-center',
})`
  line-height: 1rem;
  font-weight: 300;
  letter-spacing: 0.03rem;
  margin: 1rem 0 -1rem 1rem;
  color: ${({ warning, error }) =>
    warning ? 'orange' : error ? 'red' : '#014451'};
  margin-top: ${({ warning, error }) => (warning || error ? '0.5rem' : '0')};
  font-size: ${({ warning, error }) =>
    warning || error ? '0.64rem' : '0.8rem'};
`
Label.displayName = 'Label'
