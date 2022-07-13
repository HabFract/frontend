import React, { useEffect } from 'react'
import { useMyProfile } from '@/hooks/useMyProfile'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, setProfile] = useMyProfile()

  return profile ? (
    <div>{JSON.stringify(profile, null, 2)}</div>
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
