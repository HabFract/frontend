// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const ListItem = styled.li.attrs({
  className: "place-items-center grid",
})`
    background-color: ${({type, theme }) =>( type ? theme.colors[type] : theme.colors.neutralPrimary)};
`