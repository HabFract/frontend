import { Profile } from '@/graphql/generated'
import React from 'react'

export const MyProfileContext = React.createContext(null)

export const MyProfileProvider = (props) => {
  const [profile, setProfile] = React.useState<Omit<Profile, '__typename'>>()
  const value = React.useMemo(() => [profile, setProfile], [profile])

  return <MyProfileContext.Provider value={value} {...props} />
}
