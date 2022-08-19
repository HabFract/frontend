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
}

export const Default = (args) => (
  <Template illustration={args.illustration}> </Template>
)

export const Scene1 = () => Template.bind({})
Scene1.args = {
  illustration: 1,
}

export const Scene2 = () => Template.bind({})

Scene2.arg = {
  illustration: 2,
}

export const Scene3 = () => Template.bind({})

Scene3.arg = {
  illustration: 3,
}
