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
import { useMyProfile } from '@/app/contexts/myProfileContext'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const [profile, setProfile] = useMyProfile()

  console.log('profile :>> ', profile)
  // const variables: HabitCreateParams = {
  //   name: 'a',
  //   description: 'A nice habit',
  //   isAtomic: 'false',
  //   startTime: new Date(),
  //   endTime: new Date(Date.now() + 1000 * 60 * 60 * 24),
  // }

  // const [addHabitMutation, { data, loading, error }] = useAddHabitMutation({
  //   variables: { variables },
  // })
  // useEffect(() => {
  //   addHabitMutation()
  // }, [])
  // const { data, loading, error } = useGetHabitsQuery()
  // const { data, loading, error } = useGetHabitQuery({
  //   variables: { id: 'uhCEklzNmyxz9TvQKydP3NBmnqyDNo_qRXMrxbVcuBwfUIDx9gNBq' },
  // })
  // console.log('data :>> ', data, loading, error)

  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
