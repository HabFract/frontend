import {
  HabitCreateParams,
  MutationCreateHabitArgs,
  useAddHabitMutation,
  useGetHabitQuery,
  useGetHabitsQuery,
  useGetMeQuery,
} from '@/graphql/generated'
import React, { useEffect } from 'react'
import { LoginForm } from '@/organisms/LoginForm'
import { useMyProfile } from '@/hooks/useMyProfile'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, setProfile] = useMyProfile()

  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
