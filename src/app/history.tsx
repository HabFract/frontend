import { createBrowserHistory, createMemoryHistory } from 'history'
import { useLayoutEffect, useState } from 'react'
import { Router } from 'react-router-dom'

const isTest = process.env.NODE_ENV === 'test'

export const history = isTest
  ? createMemoryHistory({ initialEntries: ['/'] })
  : createBrowserHistory()

export const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router //   {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}
