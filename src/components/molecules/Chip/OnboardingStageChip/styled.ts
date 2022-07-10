// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.li.attrs({
  className: 'flex gap-2 w-full md:justify-center',
})`
  text-decoration: ${({ complete }) => (complete ? 'line-through' : 'none')};
`
