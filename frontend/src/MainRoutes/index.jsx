import React from 'react'
import { Switch } from 'react-router-dom';
import { Home, Authenticate, Activate } from '../pages';
import GuestRoute from './GuestRoute';
import SemiProtectedRoute from './SemiProtectedRoute';

const MainRoute = () => {
    return (
        <Switch>
            <GuestRoute path='/' exact><Home /></GuestRoute>
            <GuestRoute path="/authenticate"><Authenticate /></GuestRoute>
            <SemiProtectedRoute path="/activate"><Activate /></SemiProtectedRoute>
        </Switch>
    )
}

export default MainRoute