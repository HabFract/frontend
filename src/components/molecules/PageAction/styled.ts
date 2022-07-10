// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex flex-col p-4 gap-y-4',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`

export const Body = styled.div.attrs({
  className: 'flex justify-between items-center',
})``

export const Title = styled.div.attrs({
  className: 'flex items-center',
})``
