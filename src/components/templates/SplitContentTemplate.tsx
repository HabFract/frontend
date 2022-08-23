// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import {
  SplitContentContainer,
  Content,
  Illustration,
  Sidebar,
  SidebarContent,
} from '@/app/styled/ContentTemplate'
import { useThemeName } from '@/app/hooks/useTheme'
import { getIllustration } from './templateIllustration'
import { Footer } from '@/organisms/Footer'
// #endregion Local Imports

interface TemplateProps {
  illustration: number
  sidebar: boolean
  sidebarComponent?: React.ReactNode
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({
  illustration,
  children,
  sidebar,
  sidebarComponent,
}) => {
  const [name] = useThemeName()
  const url = getIllustration(
    illustration,
    !(name as unknown as string).includes('dark'),
  )

  return (
    <SplitContentContainer sidebar={sidebar}>
      {sidebar && (
        <Sidebar>
          <SidebarContent>{sidebar && sidebarComponent}</SidebarContent>
        </Sidebar>
      )}
      <Content sidebar={sidebar}>
        {children}
        <Illustration>
          {!!url && <img src={url} alt="illustration" />}
        </Illustration>
      </Content>
      <Footer />
    </SplitContentContainer>
  )
}
