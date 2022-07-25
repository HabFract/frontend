// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Interface Imports
import { ITitleBar } from './types'
// #endregion Interface Imports

// #region Local Imports
import { TitleBarContainer } from './styled'
import { BackCaret } from '@/atoms/Button/BackCaret'
import { Heading } from '@/atoms/Typo/Title/Heading'
import { useThemeName } from '@/app/hooks/useTheme'
import { SpaceBetweenFlexHorizontal } from '@/app/styled'
// #endregion Local Imports

export const TitleBar: React.FunctionComponent<ITitleBar.IProps> = ({
  titles,
}: ITitleBar.IProps) => {
  const [name] = useThemeName()
  const theme = name.toString().split('-')[1]
  return (
    <TitleBarContainer>
      <SpaceBetweenFlexHorizontal>
        <BackCaret />
        <Heading level={2}>{titles[theme]}</Heading>
      </SpaceBetweenFlexHorizontal>
    </TitleBarContainer>
  )
}
