// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'h-full p-4 mt-12 overflow-x-auto bg-red-200',
})`
  background-color: ${({ theme }) => theme.colors.dgray};
`
