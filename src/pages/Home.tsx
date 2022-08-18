import { aProfile } from '@/graphql/generated/mocks'
import { useMyProfile } from '@/hooks/useMyProfile'
import { NavList } from '@/molecules/NavList'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, _] = useMyProfile()
  // const profile = aProfile()
  return (
    <nav aria-label="Information portal navigation">
      <NavList newUser={!profile}></NavList>
    </nav>
  )
}
