// #region Global Imports
import styled from 'styled-components'
// #endregion Global Imports

const isDark = () => document.querySelector('html')!.classList.contains('dark')

export const Container = styled.div.attrs({
  className:
    'layout dark:bg-teal-900 bg-green-50 p-0 h-screen w-screen absolute',
})``

export const SplitContentContainer = styled.div.attrs({
  className:
    'layout relative lg:grid dark:bg-teal-900 bg-transparent p-0 h-screen w-screen items-start lg:justify-end justify-around',
})`
  grid-template-columns: 1fr;
  grid-gap: 0rem;

  @media only screen and (min-width: 440px) {
    grid-template-columns: minmax(0, 10vw) 5fr 1rem 6fr minmax(0, 10vw);
    grid-template-rows: 1fr 3rem;
    grid-template-areas: 'ml s g c mr' 'f f f c f1';
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 2fr 1rem 8fr minmax(0, 1fr);
  }
`

export const Content = styled.main.attrs({
  className: 'z-20 p-2 sm:p-2 lg:pt-2 dark:lg:my-14 lg:p-12 dark:rounded-xl',
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  background: radial-gradient(
    632.72% 86.07% at 51.45% 15.94%,
    ${() =>
      isDark() ? 'rgba(8, 186, 129, 0.15) 0%' : 'rgba(255, 255, 255, 0.15) 0%'},
    ${() =>
      isDark()
        ? 'rgba(255, 255, 255, 0.15) 42.75%'
        : 'rgba(8, 186, 129, 0.15) 59.9%'},
    ${() =>
      isDark()
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
  className: 'py-2 flex justify-start',
})`
  height: 100%;
  width: 100%;
`

export const Illustration = styled.div.attrs({
  className:
    'absolute bg-tranparent pb-12 md:bottom-0 lg:bottom-12 bottom-16 sm-ls:pb-0 lg:w-72 lg:pl-0 z-10',
})`
  width: 16rem;
  height: auto;
  left: calc(50% - 8rem);

  @media only screen and (min-width: 600px) {
    width: 428px;
    left: calc(50% - 194px);
  }

  @media only screen and (min-width: 1024px) {
    width: 428px;
    left: clamp(8vw, 12vw, 5rem);
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
