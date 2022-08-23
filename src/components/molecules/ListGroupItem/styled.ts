// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const ListGroupItemContainer = styled.li.attrs({
  className:
    'flex w-full lg:flex-row items-center justify-center rounded-2xl px-2 dark:hover:bg-gray-900 hover:bg-gray-50 hover:basis-full md:min-h-28',
})`
  cursor: pointer;
`

ListGroupItemContainer.displayName = 'ListGroupItemContainer'
