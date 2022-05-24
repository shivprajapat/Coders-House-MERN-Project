import React from 'react'
import { Route } from 'react-router-dom';

const SemiProtectedRoute = ({...rest}) => {
  return (
    <Route {...rest}></Route>
  )
}

export default SemiProtectedRoute