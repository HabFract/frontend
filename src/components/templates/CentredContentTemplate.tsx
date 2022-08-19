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
}) => {
  const [name] = useThemeName()
  console.log('!!(name:>> ', name)
  const url = getIllustration(
    illustration,
    !!(name as unknown as string).includes('dark'),
  )

  return (
    <Container>
      <Content>{children}</Content>
      <Illustration>
        {!!url && <img src={url} alt="illustration" />}
      </Illustration>
    </Container>
  )
}
