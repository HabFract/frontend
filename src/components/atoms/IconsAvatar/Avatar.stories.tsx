// #region Global Imports
import React from 'react'
import {Story} from "@storybook/react";
// #endregion Global Imports

// #region Local Imports
import { Theme } from "@app/contexts/themeContext";
import Avatar from './Avatar'
// #endregion Local Imports

// #region Interface Imports
import { IAvatar } from './types'
import { aHabit } from '@graphql/generated/mocks'
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
Default.args = { rounded: true, description: aHabit().id, type: IAvatar.Type.Primary }