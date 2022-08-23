// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Template } from './SplitContentTemplate'
// #endregion Local Imports

export default {
  component: Template,
  title: 'Design System/Organisms/SplitContentTemplate',
  argTypes: {
    illustration: {
      options: [0, 7, 8, 9],
      control: { type: 'radio' },
    },
  },
}

export const Default = (args) => (
  <Template illustration={args.illustration} sidebar={true}>
    {' '}
  </Template>
)

export const Scene0 = {
  args: {
    illustration: 0,
  },
}

export const Scene7 = {
  args: {
    illustration: 7,
  },
}

export const Scene8 = {
  args: {
    illustration: 8,
  },
}

export const Scene9 = {
  args: {
    illustration: 9,
  },
}
