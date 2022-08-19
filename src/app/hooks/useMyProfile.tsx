import { MyProfileContext } from '@/contexts/myProfileContext'
import { Profile } from '@/graphql/generated'
import { Dispatch, SetStateAction, useContext } from 'react'

export const useMyProfile = () => {
  const context = useContext(MyProfileContext)
  if (!context) {
    throw new Error(`useMyProfile must be used within a MyProfileProvider`)
  }
  return context as Dispatch<SetStateAction<Profile>>[]
}
