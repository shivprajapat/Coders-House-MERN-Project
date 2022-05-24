import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
    const isAuth = false
    const user = {
        activated: false
    }
    return (
        <Route {...rest}
            render={({ location }) => {
                return !isAuth ? (
                    <Redirect to={{
                        pathname: '/',
                        state: { from: location }
                    }} />
                ) : (isAuth && !user.activated ? (
                    <Redirect to={{
                        pathname: '/activate',
                        state: { from: location }
                    }} />
                ) : (
                    children
                )
                )
            }}
        />
    )
}

export default ProtectedRoute