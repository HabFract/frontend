import { ApolloProvider } from '@apollo/client'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './components/pages/Home'
import { Profile } from './components/pages/Profile'
import { theme } from './definitions/styled/theme'
import client from './graphql/holochainClient'
import './index.css'

const root = document.getElementById('root')

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/profile"
          element={
            <Profile username={localStorage.getItem('username') || ''} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ThemeProvider>,
  root,
)
