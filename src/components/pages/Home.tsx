import { HabitCreateParams, MutationCreateHabitArgs, useAddHabitMutation, useGetHabitQuery } from '@/graphql/generated'
import React, { useEffect } from 'react'
import { LoginForm } from '../organisms/LoginForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const variables : HabitCreateParams = { name: 'a'}

  const [addHabitMutation, { data, loading, error }] = useAddHabitMutation({variables: {variables}})
  useEffect(() => {
    addHabitMutation()
  }, [])
  // const {data, loading, error } = useGetHabitQuery({variables: {id: '2'}})
  console.log('data :>> ', data, loading, error);
  
  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
