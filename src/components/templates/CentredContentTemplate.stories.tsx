// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container } from '@/app/styled/CentredContentTemplate'
import { Template } from './CentredContentTemplate'
// #endregion Local Imports

export default {
  component: Template,
  title: 'Design System/Organisms/CentredContentTemplate',
  argTypes: {
    illustration: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'radio' },
    },
  },
}

export const Default = (args) => (
  <Template illustration={args.illustration} sidebar={false}>
    {' '}
  </Template>
)

export const Scene1 = {
  args: {
    illustration: 1,
  },
}

export const Scene2 = {
  args: {
    illustration: 2,
  },
}

export const Scene3 = {
  args: {
    illustration: 3,
  },
}

export const Scene4 = {
  args: {
    illustration: 4,
  },
}

export const Scene5 = {
  args: {
    illustration: 5,
  },
}

export const Scene6 = {
  args: {
    illustration: 6,
  },
}
