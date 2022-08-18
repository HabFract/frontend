// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { TitleBar } from '.'

// #endregion Local Imports

export default {
  component: TitleBar,
  title: 'Design System/Molecules/TitleBar',
}

export const Default = () => (
  <TitleBar titles={{ default: 'A light title', dark: 'A dark title' }} />
)
