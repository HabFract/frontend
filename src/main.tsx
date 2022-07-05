import React, { FC } from 'react'

import { createRoot } from 'react-dom/client';

import { Buffer } from 'buffer'

import connect, { ClientOptions } from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import { Theme } from './app/contexts/themeContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
// import { Profile } from './components/pages/Profile'

import './index.scss'
globalThis.Buffer = Buffer

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route
          path="/profile"
          element={
            <Profile username={localStorage.getItem('username') || ''} />
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!);
root.render(
  <Theme>
    <ApolloProvider client={(await connect({} as ClientOptions))}>
      <App />
    </ApolloProvider>
  </Theme>
)
