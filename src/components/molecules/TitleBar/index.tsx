// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { ITitleBar } from './types'
// #endregion Interface Imports

// #region Local Imports
import { Container } from './styled'
import { BackCaret } from '@/atoms/Button/BackCaret'
import { H2 } from '@/atoms/Typo/Title/H2'
// #endregion Local Imports

export const TitleBar: React.FunctionComponent<ITitleBar.IProps> = (
  _props: ITitleBar.IProps,
) => {
  const isDark = true
  return (
    <Container>
      <BackCaret />
      <H2>{isDark ? 'Break a negative habit' : 'Make a positive habit'}</H2>
    </Container>
  )
}
