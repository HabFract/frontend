// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex flex-col items-center text-center p-8',
})`
  background-color: ${({ theme }) => theme.colors.dgray};
  min-height: 406px;
  min-width: 347px;
  font-family: 'Lexend Deca', sans-serif;
`
