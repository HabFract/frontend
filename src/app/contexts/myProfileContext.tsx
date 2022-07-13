import { Profile } from '@/graphql/generated'
import React from 'react'

const MyProfileContext = React.createContext(null)

export const MyProfileProvider = (props) => {
  const [profile, setProfile] = React.useState<Omit<Profile, '__typename'>>()
  const value = React.useMemo(() => [profile, setProfile], [profile])

  return <MyProfileContext.Provider value={value} {...props} />
}

export const useMyProfile = () => {
  const context = React.useContext(MyProfileContext)
  if (!context) {
    throw new Error(`useMyProfile must be used within a MyProfileProvider`)
  }
  return context as React.Dispatch<React.SetStateAction<Profile>>[]
}
