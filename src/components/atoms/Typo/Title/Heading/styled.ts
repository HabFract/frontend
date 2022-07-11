// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const H1 = styled.h1.attrs({
  className: 'mb-0',
})`
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

export const H2 = styled.h2.attrs({
  className: 'mb-0',
})`
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

export const H3 = styled.h3.attrs({
  className: 'mb-0',
})`
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

export const H4 = styled.h4.attrs({
  className: 'mb-0',
})`
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`
