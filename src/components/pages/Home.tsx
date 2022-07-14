import React, { useEffect } from 'react'
import { useMyProfile } from '@/hooks/useMyProfile'
import { Link } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, setProfile] = useMyProfile()
  console.log('profile :>> ', profile)
  return typeof profile == 'undefined' ? (
    <nav aria-label="Information portal navigation">
      <ul>
        <li role="none">
          <Link to={'/'} role="menu-item"></Link>
        </li>
        <li role="none">
          <Link to={'/'} role="menu-item"></Link>
        </li>
        <li role="none">
          <Link to={'/'} role="menu-item"></Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav aria-label="Information portal navigation"></nav>
  )
}
