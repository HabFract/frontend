// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.div.attrs({
  className:
    'place-items-center grid w-8 h-8 md:w-12 md:h-12 dark:bg-primary-800',
})`
  background: ${({ theme }) => theme.colors.tertiaryMain};
  color: ${({ theme }) => theme.colors.primary};
`
