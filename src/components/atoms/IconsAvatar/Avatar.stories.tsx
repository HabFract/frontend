// #region Global Imports
import React from 'react'
import {Story} from "@storybook/react";
// #endregion Global Imports

// #region Local Imports
import { Theme } from "../../../app/contexts/themeContext";
import { Avatar } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IAvatar } from './Avatar'
// #endregion Interface Imports

export default {
  component: Avatar,
  title: 'Avatar',
}

//👇 We create a “template” of how args map to rendering
const Template: Story<IAvatar.IProps> = (args) => <Theme>
  <Avatar {...args} />
</Theme>;

export const Default = Template.bind({});
Default.args = { rounded: true, description: 'a user' }

export const Primary = Template.bind({});
Primary.args = { rounded: true, description: 'a user', type: 'primary' }

export const Secondary = Template.bind({});
Secondary.args = { rounded: false, description: 'a user', type: 'secondary' }
