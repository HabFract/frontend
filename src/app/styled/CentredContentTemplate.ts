// #region Global Imports
import styled from 'styled-components'

// #endregion Global Imports
export const Container = styled.section.attrs({
  className: 'dark:bg-teal-900 bg-green-50 h-screen w-screen relative',
})`
  padding-left: ${(props) => (props.sidebar ? '30vw' : '0')};
`
Container.defaultProps = {
  sidebar: false,
}

export const Content = styled.main.attrs({
  className: 'z-20 p-0 relative md:top-12',
})`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  background: radial-gradient(
    circle closest-side,
    rgba(255, 255, 255, 0.05),
    rgba(8, 186, 129, 0.05)
  );
  border-radius: 32px 32px 0px 0px;

  @media only screen and (min-width: 1024px) {
    margin-left: auto;
    margin-right: ${(props) => (props.sidebar ? '128px' : 'auto')};
    max-width: calc(100vw - 24rem);
    min-width: calc(768px - 8rem);
  }
`

Content.defaultProps = {
  sidebar: false,
}

export const Sidebar = styled.section.attrs({})`
  left: -25vw;
  position: absolute;
  top: 11rem;
  left: 1rem;
  top: -1.5rem;

  @media only screen and (max-width: 767px) {
    width: 10rem;
  }
  @media only screen and (max-width: 600px) {
    width: 6.5rem;
  }
  @media only screen and (max-width: 440px) {
    width: 4rem;
  }
  @media only screen and (min-width: 768px) {
    top: 2.5rem;
  }
  @media only screen and (min-width: 1024px) {
    width: calc(25vw - 6rem);
    left: 8rem;
  }
`
export const SidebarContent = styled.nav.attrs({})`
  padding-top: 2rem;
  overflow: hidden;
`

export const Illustration = styled.div.attrs({
  className:
    'absolute md:left-4 bg-tranparent pb-12 bottom-8 md:pb-4 md:w-48 md:left-8 lg:w-72 lg:pl-0 lg:left-32 z-10',
})`
  width: 428px;
  height: auto;
  bottom: 16px;

  @media only screen and (max-width: 768px) {
    width: 300px;
    left: calc(50% - 150px);
  }
  @media only screen and (max-height: 960px) {
    opacity: 0.25;
  }
`

Container.displayName = 'ContentContainer'
SidebarContent.displayName = 'SidebarContent'
Sidebar.displayName = 'ContentSidebar'
Content.displayName = 'Main'
Illustration.displayName = 'Illustration'
