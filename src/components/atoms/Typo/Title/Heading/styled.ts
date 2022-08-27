// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const H1 = styled.h1.attrs({
  className: 'mb-0 text-4xl font-display dark:text-primary-100',
})`
  font-weight: 500;
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

export const H2 = styled.h2.attrs({
  className:
    'mb-0 text-xl lg:text-2xl font-display text-gray-500 sm:text-xl dark:text-primary-50',
})`
  line-height: 2.5rem;
  font-weight: 400 !important;
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

export const H3 = styled.h3.attrs({
  className:
    'my-4 text-xl font-head dark:shadow-head-dark shadow-head uppercase gray-800-transparent dark:text-primary-50',
})`
  font-style: normal;
  letter-spacing: 0.05em;
  line-height: 1.3em;
`

export const H4 = styled.h4.attrs({
  className: 'mb-0 text-lg font-display text-primary-900 dark:text-primary-50',
})`
  text-transform: ${({ caps }) => (caps ? 'uppercase' : 'none')};
`

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'
