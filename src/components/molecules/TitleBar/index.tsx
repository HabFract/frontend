// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { TitleBarContainer } from './styled'
import { SpaceBetweenFlexHorizontal } from '@/app/styled'

import { Heading } from '@/atoms/Typo/Title/Heading'
import { BackCaret } from '@/atoms/Button/BackCaret'

import { useThemeName } from '@/app/hooks/useTheme'
// #endregion Local Imports

// #endregion Interface Imports
import { ITitleBar } from './types'
// #region Interface Imports

export const TitleBar: React.FunctionComponent<ITitleBar.IProps> = ({
  backAction,
  titles,
}: ITitleBar.IProps) => {
  const [name] = useThemeName()
  const theme = name.toString().split('-')[1]
  return (
    <TitleBarContainer>
      <SpaceBetweenFlexHorizontal>
        <BackCaret onClick={backAction} />
        <Heading level={2}>{titles[theme]}</Heading>
      </SpaceBetweenFlexHorizontal>
    </TitleBarContainer>
  )
}
