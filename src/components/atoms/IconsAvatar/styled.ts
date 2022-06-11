// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className: "w-4",
})`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 400px;
    color: white;
`