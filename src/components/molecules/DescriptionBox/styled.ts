// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const DescriptionBoxContainer = styled.div.attrs({
  className:
    'flex flex-col p-2 gap-y-4 bg-gray-100 dark:bg-gray-800 md:rounded-2xl xl:mt-0 lg:rounded-r-none lg:rounded-b-none',
})`
  @media only screen and (min-width: 1024px) {
    margin-top: 2.75rem;
  }
`

DescriptionBoxContainer.displayName = 'DescriptionBoxContainer'
