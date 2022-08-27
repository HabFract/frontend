// #region Global Imports
import React from 'react'
import { Story } from '@storybook/react'
// #endregion Global Imports

// #region Local Imports
import { P } from '.'
// #endregion Local Imports

// #region Interface Imports
import { IP } from './types'
// #endregion Interface Imports

export default {
  component: P,
  title: 'Design System/Atoms/Typo/P',
}

// 👇 We create a “template” of how args map to rendering
const Template: Story<IP.IProps> = (args) => (
  <div className="bg-white">
    <P {...args} />
  </div>
)

export const Default = Template.bind({})

export const Display1 = Template.bind({})
Display1.args = {
  level: 1,
  copyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, diam sit amet faucibus scelerisque, diam arcu lacinia felis, eget varius ligula quam ut quam. `,
}

export const Display2 = Template.bind({})
Display2.args = {
  level: 2,
  copyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, diam sit amet faucibus scelerisque, diam arcu lacinia felis, eget varius ligula quam ut quam. `,
}

export const Copy = Template.bind({})

Copy.args = {
  level: 3,
  copyText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, diam sit amet faucibus scelerisque, diam arcu lacinia felis, eget varius ligula quam ut quam. Nullam suscipit libero libero, non fermentum ipsum consequat sit amet. Nam elementum, nibh ac sollicitudin pretium, diam nisi ornare arcu, sit amet malesuada neque erat at augue. Nam suscipit nulla eu nulla malesuada, at finibus nunc maximus. Suspendisse eu accumsan elit. Donec ante eros, consequat eu consectetur ut, fermentum sed dolor. Aenean iaculis ante nisl, et pellentesque erat vestibulum vel. Vivamus varius eu ex eu sagittis. Nulla et varius diam. Nulla varius finibus risus, vel tempus dui interdum a. Aliquam eget posuere metus. Aliquam in erat id massa finibus euismod.

  Etiam ex orci, consectetur at nisi non, lobortis volutpat mauris. Maecenas aliquet id lacus at dapibus. Praesent pulvinar, felis at pretium tempus, odio lectus luctus orci, ac rhoncus nisl justo ut est. Donec maximus augue vel hendrerit rutrum. Sed aliquet sit amet metus nec euismod. Donec at luctus lorem. Aliquam eget neque nibh. Mauris massa lectus, vehicula non pellentesque quis, posuere et ligula. Sed eget leo vel leo rhoncus cursus. Morbi malesuada velit in sem commodo, in blandit velit interdum. Vivamus tempus convallis tortor. Ut non leo posuere, volutpat odio eu, volutpat orci. Cras risus justo, efficitur ut finibus sed, dapibus ut quam. Sed et nisi lacinia, ultricies elit vitae, imperdiet nunc.

  Proin id dignissim sapien. Nam placerat neque non arcu finibus pretium. Proin volutpat fringilla mi ac varius. Integer hendrerit turpis ut consectetur placerat. Fusce sollicitudin pulvinar erat in dapibus. Sed eu velit diam. Mauris pretium malesuada arcu at posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam gravida lorem sem, ac mattis augue aliquam sit amet.`,
}
