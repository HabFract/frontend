import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import './index.scss'

import { ApolloProvider } from '@apollo/client'
import connect, { ClientOptions } from './graphql/client'
import { Theme } from './app/contexts/themeContext'

import { NotFound } from './components/pages/404'
import { Home } from './components/pages/Home'
import { Onboarding } from './components/pages/Onboarding'
// import { Profile } from './components/pages/Profile'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
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
