// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

export const Container = styled.section.attrs({
  className: 'dark:bg-teal-900 bg-green-50 p-0 h-screen w-screen absolute',
})``

export const SplitContentContainer = styled.main.attrs({
  className:
    'lg:grid dark:bg-teal-900 bg-transparent p-0 h-screen w-screen items-start lg:justify-end justify-around',
})`
  grid-template-columns: 1fr;

  @media only screen and (min-width: 440px) {
    grid-template-rows: 1fr 3rem;
    grid-template-columns: minmax(0, 1fr) 4fr 9fr minmax(0, 1fr);
    grid-template-areas: 'ml s c mr';
  }
`

export const Content = styled.main.attrs({
  className: 'z-20 p-2 sm:p-4 lg:p-12 md:top-12',
})`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-radius: 32px 32px 0px 0px;

  background: radial-gradient(
    632.72% 86.07% at 51.45% 15.94%,
    ${() =>
      document.querySelector('html')!.classList.contains('dark')
        ? 'rgba(8, 186, 129, 0.15) 0%'
        : 'rgba(255, 255, 255, 0.15) 0%'},
    ${() =>
      document.querySelector('html')!.classList.contains('dark')
        ? 'rgba(255, 255, 255, 0.15) 42.75%'
        : 'rgba(8, 186, 129, 0.15) 59.9%'},
    ${() =>
      document.querySelector('html')!.classList.contains('dark')
        ? 'rgba(35, 56, 118, 0.15) 100%'
        : 'rgba(255, 255, 255, 0.15) 100%'}
  );

  @media only screen and (min-width: 1024px) {
    margin: 0 auto;
    max-width: calc(100vw - 24rem);
    min-width: calc(768px - 8rem);
  }

  grid-area: c;
`

export const Sidebar = styled.section.attrs({})`
  grid-area: s;
`

export const SidebarContent = styled.nav.attrs({
  className: 'py-2 flex jussm:mx-2tify-start',
})`
  height: 100%;
  width: 100%;
`

export const Illustration = styled.div.attrs({
  className:
    'absolute bg-tranparent pb-12 bottom-8 sm-ls:pb-0 lg:w-72 lg:pl-0 lg:left-32 z-10',
})`
  width: 12rem;
  height: auto;
  bottom: 16px;
  left: calc(50% - 6rem);

  @media only screen and (min-width: 600px) {
    width: 428px;
    left: calc(50% - 214px);
  }

  @media only screen and (max-height: 960px) {
    opacity: 0.25;
  }
`

Container.displayName = 'ContentContainer'

Content.displayName = 'MainContent'
SplitContentContainer.displayName = 'MainContent'

Sidebar.displayName = 'ContentSidebar'
SidebarContent.displayName = 'SidebarContent'
Illustration.displayName = 'Illustration'
