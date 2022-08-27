// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const DescriptionBoxContainer = styled.div.attrs({
  className:
    'flex flex-col p-2 lg:px-8 md:pb-8 gap-y-4 bg-gray-100/80 dark:bg-transparent md:rounded-2xl xl:mt-0 lg:rounded-r-none lg:rounded-b-none',
})`
  @media only screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`

DescriptionBoxContainer.displayName = 'DescriptionBoxContainer'
