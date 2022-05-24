import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const GuestRoute = ({ children, ...rest }) => {
  const isAuth = true
  return (
    <Route {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect to={{
            pathname: '/rooms',
            state: { from: location }
          }} />
        ) : (
          children
        )
      }}
    />

  )
}

export default GuestRoute