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
import {
  Container,
  Content,
  Illustration,
} from '@/app/styled/CentredContentTemplate'
import { useThemeName } from '@/app/hooks/useTheme'
// #endregion Local Imports
interface TemplateProps {
  illustration: number
  sidebar: boolean
  children: React.ReactNode
}

function getIllustration(num: number, light: boolean) {
  switch (num) {
    case 1:
      return light ? Blockchain : BlockchainDark
    case 2:
      return light ? LifeManagement : LifeManagementDark
    case 3:
      return light ? Media : MediaDark
    default:
      return ''
  }
}

export const Template: React.FC<TemplateProps> = ({
  illustration,
  children,
  sidebar,
}) => {
  const [name] = useThemeName()
  const url = getIllustration(
    illustration,
    !(name as unknown as string).includes('dark'),
  )

  return (
    <Container sidebar={sidebar}>
      {sidebar && (
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </nav>
      )}
      <Content sidebar={sidebar}>{children}</Content>
      <Illustration>
        {!!url && <img src={url} alt="illustration" />}
      </Illustration>
    </Container>
  )
}
