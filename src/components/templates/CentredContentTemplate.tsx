// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import Blockchain from '../../assets/svg/Light/Scenes/Blockchain.svg'
import BlockchainDark from '../../assets/svg/Dark/Scenes/Blockchain.svg'
import LifeManagement from '../../assets/svg/Light/Scenes/LifeManagement.svg'
import LifeManagementDark from '../../assets/svg/Dark/Scenes/LifeManagement.svg'
import Media from '../../assets/svg/Light/Scenes/Media.svg'
import MediaDark from '../../assets/svg/Dark/Scenes/Media.svg'
import RemoteLife from '../../assets/svg/Light/Scenes/RemoteLife.svg'
import RemoteLifeDark from '../../assets/svg/Dark/Scenes/RemoteLife.svg'
import Communication from '../../assets/svg/Light/Scenes/Communication.svg'
import CommunicationDark from '../../assets/svg/Dark/Scenes/Communication.svg'
import VirtualReality from '../../assets/svg/Light/Scenes/VirtualReality.svg'
import VirtualRealityDark from '../../assets/svg/Dark/Scenes/VirtualReality.svg'

import {
  Container,
  Content,
  Illustration,
  Sidebar,
  SidebarContent,
} from '@/app/styled/CentredContentTemplate'
import { useThemeName } from '@/app/hooks/useTheme'
// #endregion Local Imports
interface TemplateProps {
  illustration: number
  sidebar: boolean
  sidebarComponent?: React.ReactNode
  children: React.ReactNode
}

function getIllustration(num: number, light: boolean) {
  switch (num) {
    case 1:
      return light ? Blockchain : BlockchainDark
    case 2:
      return light ? LifeManagement : LifeManagementDark
    case 3:
      return light ? RemoteLife : RemoteLifeDark
    case 4:
      return light ? Communication : CommunicationDark
    case 5:
      return light ? Media : MediaDark
    case 6:
      return light ? VirtualReality : VirtualRealityDark
    default:
      return ''
  }
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
    <Container sidebar={sidebar}>
      {sidebar && (
        <Sidebar>
          <SidebarContent>{sidebar && sidebarComponent}</SidebarContent>
        </Sidebar>
      )}
      <Content sidebar={sidebar}>{children}</Content>
      <Illustration>
        {!!url && <img src={url} alt="illustration" />}
      </Illustration>
    </Container>
  )
}
