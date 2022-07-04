import { useGetHabitsLazyQuery, useGetHabitsQuery } from '@/graphql/generated'
import React, { useEffect } from 'react'
import { LoginForm } from '../organisms/LoginForm'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}


export const Home: React.FC<HomeProps> = () => {
    const {data, loading, error } = useGetHabitsQuery()

    console.log('data :>> ', data);
  return typeof localStorage.getItem('username') !== 'string' ? (
    <LoginForm />
  ) : (
    <div>Hello, {localStorage.getItem('username')}</div>
  )
}
