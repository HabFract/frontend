// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const IconContainer = styled.div.attrs({
  className: "place-items-center grid w-24 h-24",
})`
    background-color: ${({type, theme }) =>( type ? theme.colors[type] : theme.colors.neutralPrimary)};
    color: black;
`