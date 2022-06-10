// #region Global Imports
import React from 'react'
import {Story} from "@storybook/react";
// #endregion Global Imports

// #region Local Imports
import { Theme } from "@contexts/themeContext";
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

export const Primary = Template.bind({});
Primary.args = { backgroundColor: '#10B981' }

export const Secondary = Template.bind({});
Secondary.args = { backgroundColor: '#F759AB' }
