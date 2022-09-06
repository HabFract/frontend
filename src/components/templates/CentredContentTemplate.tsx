// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import {
  Container,
  Content,
  Illustration,
} from '@/templates/styled/ContentTemplate'
import { useThemeName } from '@/app/hooks/useTheme'
import { getIllustration } from './templateIllustration'
// #endregion Local Imports
interface TemplateProps {
  illustration: number
  sideBarComponent?: React.ReactNode
  sideBarPosition?: string
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({
  illustration,
  sideBarComponent,
  sideBarPosition,
  children,
}) => {
  const [name] = useThemeName()
  const url = getIllustration(
    illustration,
    !(name as unknown as string).includes('dark'),
  )

  return (
    <Container>
      <Content>
        {!!sideBarComponent && sideBarPosition == 'left' && sideBarComponent}
        {children}
        {!!sideBarComponent && sideBarPosition == 'right' && sideBarComponent}
      </Content>
      <div style={{ display: 'grid', gridArea: 'f', height: '0' }}>
        <Illustration>
          {!!url && <img src={url} alt="illustration" />}
        </Illustration>
      </div>
    </Container>
  )
}
