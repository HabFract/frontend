// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex items-center justify-between',
})`
  color: ${({ theme }) => theme.colors.text};
`
