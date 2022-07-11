// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'relative h-full p-4 bg-red-200',
})`
  background-color: ${({ theme }) => theme.colors.dgray};
`
