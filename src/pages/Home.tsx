import React from 'react'

import { useMyProfile } from '@/hooks/useMyProfile'
import { NavList } from '@/molecules/NavList'
import { Template } from '@/templates/SplitContentTemplate'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  return (
    <Template illustration={1} sidebar={false}>
      <nav aria-label="Information portal navigation">
        <NavList newUser={!profile}></NavList>
      </nav>
    </Template>
  )
}

export default Home
