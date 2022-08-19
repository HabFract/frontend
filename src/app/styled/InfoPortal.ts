// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.div.attrs({
  className: 'h-full grid grid-cols-6 gap-x-5 mx-8 b-2 b-red-400',
})`
  margin-left: 25vw;
`

Container.displayName = 'InfoPortalContainer'
