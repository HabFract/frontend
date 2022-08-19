import { Buffer } from 'buffer'
import React, { FC, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './index.scss'
import 'flowbite'
import { NotFound } from './pages/404'
import { Home } from './pages/Home'
import { Onboarding } from './pages/Onboarding'
import { useGetMeQuery } from './graphql/generated'
import { MyProfileProvider } from '@/contexts/myProfileContext'
import { ThemeProvider } from '@/contexts/themeContext'
import connect, { ClientOptions } from '@/graphql/client'
import { useMyProfile } from '@/hooks/useMyProfile'
import { ApolloProvider } from '@apollo/client'
import { Visualisations } from './pages/Visualisations'
import { InfoPortal } from './pages/InfoPortal'

globalThis.Buffer = Buffer

const App: FC = () => {
  const { data: activeUser, loading, error } = useGetMeQuery()
  const [_, setProfile] = useMyProfile()

  useEffect(() => {
    if (activeUser && activeUser.me.agentPubKey !== '') {
      const {
        agentPubKey,
        profile: { __typename: _, ...rawProfile },
      } = activeUser.me

      setProfile(rawProfile)
      console.log(
        `Active user profile context has been set for agent with hash ${agentPubKey}`,
      )
    }
  }, [activeUser])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/info/what" element={<InfoPortal />}></Route>
        <Route path="/info/why" element={<InfoPortal />}></Route>
        <Route path="/info/how" element={<InfoPortal />}></Route>
        <Route path="/:theme/vis" element={<Visualisations />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/:theme/onboarding"
          element={false ? <Navigate to="/" replace /> : <Onboarding />} // Maybe profile needs a flag that can be fed here to redirect from oboarding
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApolloProvider client={await connect({} as ClientOptions)}>
        <MyProfileProvider>
          <App />
        </MyProfileProvider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
