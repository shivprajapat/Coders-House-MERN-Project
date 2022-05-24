import React from 'react'
import { Switch } from 'react-router-dom';
import { Home, Authenticate } from '../pages';
import GuestRoute from './GuestRoute';

const MainRoute = () => {
    return (
        <Switch>
            <GuestRoute path='/' exact><Home/></GuestRoute>
            <GuestRoute path="/authenticate"><Authenticate /></GuestRoute>
        </Switch>
    )
}

export default MainRoute