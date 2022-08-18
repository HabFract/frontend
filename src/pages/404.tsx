import { CenteringFlexHorizontal } from '@/app/styled'
import { Heading } from '@/atoms/Typo/Title/Heading'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const NotFound: React.FC<HomeProps> = () => {
  return (
    <CenteringFlexHorizontal>
      <Heading level={1} caps={true}>
        404
      </Heading>
      The page does not exist
    </CenteringFlexHorizontal>
  )
}
