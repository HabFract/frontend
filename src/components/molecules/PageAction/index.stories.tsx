// #region Global Imports
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { PageAction } from '.'
import { IPageAction } from './types'
// #endregion Local Imports

export default {
  component: PageAction,
  title: 'Design System/Molecules/PageAction',
}

const Template: Story<IPageAction.IProps> = (args) => <PageAction {...args} />

export const Default = Template.bind({})
Default.args = { copyText: 'This is a page action bit of text.' }
