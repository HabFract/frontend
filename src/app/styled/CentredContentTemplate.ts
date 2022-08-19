// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports

export const Container = styled.section.attrs({
  className: 'dark:bg-teal-900 bg-green-50 h-screen w-screen relative',
})``

export const Content = styled.main.attrs({
  className: 'z-20 p-0 lg:p-12 md:mx-12 lg:mx-auto relative md:top-12',
})`
  height: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  background: radial-gradient(
    circle closest-side,
    rgba(255, 255, 255, 0.05),
    rgba(8, 186, 129, 0.05)
  );
  border-radius: 32px 32px 0px 0px;
`

export const Illustration = styled.div.attrs({
  className: 'absolute md:left-4 bg-tranparent pb-12 md:pb-4 md:pl-32 z-10',
})`
  @media only screen and (max-width: 768px) {
    width: 300px;
    left: calc(50% - 150px);
  }
  @media only screen and (max-height: 960px) {
    opacity: 0.25;
  }

  width: 428px;
  height: auto;
  bottom: 16px;
`

Container.displayName = 'ContentContainer'
Content.displayName = 'Main'
Illustration.displayName = 'Illustration'
