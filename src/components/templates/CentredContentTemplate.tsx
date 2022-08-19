// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import blockchain from '@/svg/Light/Scenes/Blockchain.svg'
import blockchainDark from '@/svg/Dark/Blockchain.svg'
import LifeManagement from '@/svg/Light/LifeManagement.svg'
import LifeManagementDark from '@/svg/Dark/LifeManagement.svg'
import Media from '@/svg/Light/Media.svg'
import MediaDark from '@/svg/Dark/Media.svg'
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
      return light ? blockchain : blockchainDark
    case 2:
      return light ? LifeManagement : LifeManagementDark
    case 3:
      return light ? Media : MediaDark
    default:
      return light ? blockchain : blockchainDark
  }
}

export const Template: React.FC<TemplateProps> = ({
  illustration,
  children,
}) => {
  const [name] = useThemeName()

  return (
    <Container>
      <Content>{children}</Content>
      <Illustration>
        <img
          src={getIllustration(
            illustration,
            !!(name as unknown as string).includes('dark'),
          )}
          alt="illustration"
        />
      </Illustration>
    </Container>
  )
}
