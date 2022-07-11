// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex justify-between items-center',
})`
  color: ${({ theme }) => theme.colors.text};
`
