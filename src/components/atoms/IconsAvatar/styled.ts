// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className: "grid place-items-center w-24 h-24",
})`
    background-color: ${({ primary, secondary, theme }) =>( primary || secondary ? theme.colors[secondary ? 'secondary' : 'primary'] : theme.colors.neutralPrimary)};
    color: white;
`