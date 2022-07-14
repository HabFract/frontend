// #region Global Imports
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { NavList } from '.'
import { INavList } from './types'
// #endregion Local Imports

export default {
  component: NavList,
  title: 'Design System/Molecules/NavList',
}

const Template: Story<INavList.IProps> = (args) => <NavList {...args} />

export const NewUser = Template.bind({})
NewUser.args = {
  newUser: true,
}
export const RegisteredUser = Template.bind({})
RegisteredUser.args = {
  newUser: false,
}
