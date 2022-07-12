import React, { FC } from 'react'

import { createRoot } from 'react-dom/client'

import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

import connect, { ClientOptions } from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import { Theme } from './app/contexts/themeContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
// import { Profile } from './components/pages/Profile'

import './index.scss'
import { Onboarding } from './components/pages/Onboarding'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:theme/onboarding" element={<Onboarding />}></Route>
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
        <App />
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
)
