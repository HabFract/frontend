// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'place-items-center grid',
})`
  background-color: ${({ theme }) => theme.colors.dgray};
`
