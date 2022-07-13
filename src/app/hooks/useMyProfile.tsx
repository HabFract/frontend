import React from 'react'
import { Profile } from '@/graphql/generated'
import { MyProfileContext } from '@/contexts/myProfileContext'

export const useMyProfile = () => {
  const context = React.useContext(MyProfileContext)
  if (!context) {
    throw new Error(`useMyProfile must be used within a MyProfileProvider`)
  }
  return context as React.Dispatch<React.SetStateAction<Profile>>[]
}
