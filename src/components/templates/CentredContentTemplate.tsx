// #region Global Imports
import React from 'react'
// #endregion Global Imports

// #region Local Imports
import { Container, Content, Illustration } from '@/app/styled/ContentTemplate'
import { useThemeName } from '@/app/hooks/useTheme'
import { getIllustration } from './templateIllustration'
// #endregion Local Imports
interface TemplateProps {
  illustration: number
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = ({
  illustration,
  children,
}) => {
  const [name] = useThemeName()
  const url = getIllustration(
    illustration,
    !(name as unknown as string).includes('dark'),
  )

  return (
    <Container>
      <Content>{children}</Content>
      <div style={{ display: 'grid', gridArea: 'f' }}>
        <Illustration>
          {!!url && <img src={url} alt="illustration" />}
        </Illustration>
      </div>
    </Container>
  )
}
