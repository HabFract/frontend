// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.li.attrs({
  className:
    'flex gap-2 w-full md:justify-center items-center px-4 py-1 rounded-2xl border-2 border-dashed',
})`
  border-color: ${({ isDark }) => (isDark ? 'red' : 'black')};
`
