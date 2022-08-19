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
  Sidebar,
  SidebarContent,
} from '@/app/styled/CentredContentTemplate'
import { ListGroup } from 'flowbite-react'
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
        <Sidebar>
          <SidebarContent>
            <ListGroup>
              <ListGroup.Item>
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      What
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      Why
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      How
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </SidebarContent>
        </Sidebar>
      )}
      <Content sidebar={sidebar}>{children}</Content>
      <Illustration>
        {!!url && <img src={url} alt="illustration" />}
      </Illustration>
    </Container>
  )
}
