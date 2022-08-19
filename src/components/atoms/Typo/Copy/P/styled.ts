// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const StyledP = styled.p.attrs({
  className: 'semi-bold',
})`
  font-family: "Montserrat, 'Open Sans'";
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 1%;
  text-decoration: ${() => 'none'};
`
