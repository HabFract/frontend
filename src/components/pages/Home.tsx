import {
  HabitCreateParams,
  MutationCreateHabitArgs,
  useAddHabitMutation,
  useGetHabitQuery,
} from '@/graphql/generated'
import React, { useEffect } from 'react'
import { LoginForm } from '../organisms/LoginForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
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
  const { data, loading, error } = useGetHabitQuery({
    variables: { id: 'uhCEklzNmyxz9TvQKydP3NBmnqyDNo_qRXMrxbVcuBwfUIDx9gNBq' },
  })
  console.log('data :>> ', data, loading, error)

  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
