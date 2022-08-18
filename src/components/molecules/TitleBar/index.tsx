// #region Global Imports
// #endregion Interface Imports
// #region Local Imports
import { TitleBarContainer } from './styled'
// #endregion Global Imports
// #region Interface Imports
import { ITitleBar } from './types'
import { useThemeName } from '@/app/hooks/useTheme'
import { SpaceBetweenFlexHorizontal } from '@/app/styled'
import { BackCaret } from '@/atoms/Button/BackCaret'
import { Heading } from '@/atoms/Typo/Title/Heading'
import React from 'react'

// #endregion Local Imports

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
