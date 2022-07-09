// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex flex-col',
})`
  background-color: ${({ theme }) => theme.colors.dgray};
`

export const Body = styled.div.attrs({
  className: 'flex',
})``

export const Title = styled.div.attrs({
  className: 'flex items-center',
})``
