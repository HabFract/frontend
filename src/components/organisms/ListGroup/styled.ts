// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const ListGroupContainer = styled.ul.attrs({
  className:
    'h-full flex flex-col gap-y-2 bg-transparent dark:bg-gray-700 rounded-2xl',
})`
  max-width: 16rem;
`

ListGroupContainer.displayName = 'ListGroupContainer'
