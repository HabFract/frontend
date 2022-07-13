import React, { FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import './index.scss'

import { ApolloProvider } from '@apollo/client'
import connect, { ClientOptions } from './graphql/client'
import { Theme } from '@/contexts/themeContext'
import { MyProfileProvider, useMyProfile } from '@/contexts/myProfileContext'

import { useGetMeQuery } from './graphql/generated'

import { NotFound } from './components/pages/404'
import { Home } from './components/pages/Home'
import { Onboarding } from './components/pages/Onboarding'
// import { Profile } from './components/pages/Profile'

const App: FC = () => {
  const { data: activeUser, loading, error } = useGetMeQuery()
  const [_, setProfile] = useMyProfile()

  useEffect(() => {
    if (activeUser) {
      const {
        agentPubKey,
        profile: { __typename: _, ...rawProfile },
      } = activeUser.me

      setProfile(rawProfile)
      console.log(
        'Active user profile context has been set for agent with hash ' +
          agentPubKey,
      )
    }
  }, [activeUser])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/:theme/onboarding"
          element={false ? <Navigate to="/" replace /> : <Onboarding />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Theme>
      <ApolloProvider client={await connect({} as ClientOptions)}>
        <MyProfileProvider>
          <App />
        </MyProfileProvider>
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
)
