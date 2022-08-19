// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.section.attrs({
  className: 'dark:bg-teal-900 bg-green-50 h-screen w-screen relative',
})``

export const Content = styled.main.attrs({
  className: 'h-full border-1 mx-auto z-20 relative',
})`
  max-width: 1024px;
`

export const Illustration = styled.div.attrs({
  className: 'absolute left-0 bg-tranparent pb-4 pl-32 z-10',
})`
  width: 428px;
  height: auto;
  bottom: 96px;
`

Container.displayName = 'ContentContainer'
Content.displayName = 'Main'
Illustration.displayName = 'Illustration'
