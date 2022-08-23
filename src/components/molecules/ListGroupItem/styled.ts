// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const ListGroupItemContainer = styled.li.attrs({
  className:
    'flex w-full h-full lg:flex-row items-center justify-center rounded-2xl lg:rounded-r-none px-2 dark:hover:bg-gray-900 hover:bg-gray-100 border-2 border-transparent dark:border-transparent hover:bg-gray-100-transparent hover:basis-full md:min-h-28',
})`
  cursor: pointer;
`

ListGroupItemContainer.displayName = 'ListGroupItemContainer'
