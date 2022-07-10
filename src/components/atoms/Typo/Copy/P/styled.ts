// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const StyledP = styled.p.attrs({
  className: 'text-sm bold',
})`
  text-decoration: ${() => 'line-through'};
`
