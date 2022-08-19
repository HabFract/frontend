// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'flex flex-col p-4 gap-y-4',
})`
  background-color: ${({ theme }) => theme.colors.tertiaryMain};
`
