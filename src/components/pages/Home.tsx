import React from 'react'

import { useMyProfile } from '@/hooks/useMyProfile'

import { NavList } from '@/molecules/NavList'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  return (
    <nav aria-label="Information portal navigation">
      <NavList newUser={!profile}></NavList>
    </nav>
  )
}
