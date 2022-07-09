// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.li.attrs({
  className: 'place-items-center grid',
})`
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`
