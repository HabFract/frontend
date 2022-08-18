// #region Global Imports
// #endregion Global Imports
// #region Local Imports
import { DescriptionBox } from '.'
import { IDescriptionBox } from './types'
import { Story } from '@storybook/react'

// #endregion Local Imports

export default {
  component: DescriptionBox,
  title: 'Design System/Molecules/DescriptionBox',
}

const Template: Story<IDescriptionBox.IProps> = (args) => (
  <DescriptionBox {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Do a thing',
  copyText: 'This is a page action bit of text.',
}
