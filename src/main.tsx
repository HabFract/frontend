import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import { Buffer } from 'buffer'
globalThis.Buffer = Buffer

import connect, { ClientOptions } from './graphql/client'
import { ApolloProvider } from '@apollo/client'
import { Theme } from './app/contexts/themeContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/pages/Home'
// import { Profile } from './components/pages/Profile'

import './index.scss'

const root = document.getElementById('root')

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

ReactDOM.render(
  <Theme>
    <ApolloProvider client={(await connect({} as ClientOptions))}>
      <App />
    </ApolloProvider>
  </Theme>,
  root,
)
