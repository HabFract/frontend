// #region Global Imports
import { isDark } from '@/app/utils/general'
import styled from 'styled-components'

// #endregion Global Imports

export const ListGroupItemContainer = styled.li.attrs({
  className:
    'flex w-full h-full lg:flex-row items-center justify-center rounded-2xl lg:rounded-r-none px-2 border-2 border-transparent dark:border-transparent hover:bg-gray-100-transparent dark:hover:bg-gray-900  md:min-h-28',
})`
  max-width: 33vw;
  cursor: pointer;
  &:hover {
    .list-item {
      color: ${() => (isDark() ? '#f16494' : '#f16494')};
    }
  }
`

ListGroupItemContainer.displayName = 'ListGroupItemContainer'
