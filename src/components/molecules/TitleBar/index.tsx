// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { TitleBarContainer } from './styled'

import { Heading } from '@/atoms/Typo/Title/Heading'
import { BackCaret } from '@/atoms/Button/BackCaret'

import { useThemeName } from '@/app/hooks/useTheme'
// #endregion Local Imports

// #endregion Interface Imports
import { ITitleBar } from './types'
import { SpaceFlex } from '@/pages/styled'
// #region Interface Imports

export const TitleBar: React.FunctionComponent<ITitleBar.IProps> = ({
  backAction,
  titles,
}: ITitleBar.IProps) => {
  const [name] = useThemeName()
  const theme = name.toString().split('-')[1]
  return (
    <TitleBarContainer>
      <SpaceFlex space="between">
        <BackCaret onClick={backAction} />
        <Heading level={4} caps={true}>
          {titles[theme]}
        </Heading>
      </SpaceFlex>
    </TitleBarContainer>
  )
}
