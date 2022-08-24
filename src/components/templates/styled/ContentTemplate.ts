// #region Global Imports
import styled from 'styled-components'
import { isDark } from '@/app/utils/general'
// #endregion Global Imports

export const Container = styled.div.attrs({
  className:
    'layout grid dark:bg-teal-900 bg-green-50 p-0 h-full w-screen absolute overflow-hidden',
})`
  max-height: calc(100vh - 3rem);
  grid-template-columns: minmax(0, 8px) 1fr minmax(0, 8px);
  grid-template-rows: auto;
  grid-template-areas: 'ml c mr' 'f f f';
`

export const SplitContentContainer = styled.div.attrs({
  className:
    'layout relative lg:grid dark:bg-teal-900 bg-primary-50-transparent p-0 max-h-screen w-screen items-start lg:justify-end justify-around',
})`
  grid-template-columns: 1fr;
  grid-gap: 0rem;

  @media only screen and (min-width: 440px) {
    grid-template-columns: minmax(0, 10vw) 5fr 1rem 6fr minmax(0, 10vw);
    grid-template-rows: auto;
    grid-template-areas: 'ml s g c mr' 'f f f f f';
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: minmax(0, 3rem) 2fr 0.1rem 8fr minmax(0, 3rem);
    grid-template-areas: 'ml s g c mr' 'm f f f mr';
  }

  @media only screen and (min-width: 1680px) {
    grid-template-columns: minmax(0, 15vw) 2fr 0.1rem 8fr minmax(0, 15vw);
  }
`

export const Content = styled.main.attrs({
  className: 'z-20 p-2 pb-36 sm:p-2 md:px-3 lg:pt-1 lg:my-14 md:p-3 rounded-xl',
})`
  margin-bottom: 22vh;
  width: 100%;
  height: 100%;
  min-height: 66vh;
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
  className: 'p-2 md:p-3 md:p-3 flex justify-start',
})`
  height: 100%;
  width: 100%;
`
export const Illustration = styled.div.attrs({
  className: 'absolute sm-ls:pb-0 lg:w-72 lg:pl-0 z-10',
})`
  bottom: ${({ sidebar }) => (sidebar ? '42rem' : '4rem')};
  opacity: 0.5;
  width: 16rem;
  height: auto;
  left: calc(50% - 8rem);

  @media only screen and (min-width: 600px) {
    width: 428px;
    left: calc(50% - 194px);
    bottom: ${({ sidebar }) => (sidebar ? '38rem' : '8rem')};
  }
  @media only screen and (min-width: 768px) {
    bottom: ${({ sidebar }) => (sidebar ? '24rem' : '0rem')};
  }

  @media only screen and (min-width: 1024px) {
    width: 428px;
    left: clamp(3vw, 12vw, 5rem);
    bottom: ${({ sidebar }) => (sidebar ? '24rem' : '0rem')};
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
