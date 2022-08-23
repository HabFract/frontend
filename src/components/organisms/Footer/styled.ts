// #region Global Imports
import { isDark } from '@/app/utils/general'
import styled from 'styled-components'
// #endregion Global Imports

export const FooterContainer = styled.ul.attrs({
  className: 'bg-transparent dark:bg-gray-900 relative z-40',
})`
  grid-area: f;

  ul li a,
  .socials a {
    padding-top: 0.5rem;
    &:hover {
      color: ${() => (isDark() ? '#f16494' : '#83CFB5')} !important;
    }
    &:active {
      color: ${() => (isDark() ? '#ee427c' : '#83f1c2')} !important;
    }
  }
`

FooterContainer.displayName = 'FooterContainer'
