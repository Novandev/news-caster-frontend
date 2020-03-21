import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import {ProtectedRoute} from './ProtectedRoute'
import Unauthorized from '../components/common/unauthorized/Unauthorized'


export default function Routes({ component: Component, ...rest }) {
    
    return(

                <Switch>
                <Route
                    path='/'
                    exact
                    component={HomePage} />
                
                <ProtectedRoute
                    path='/profile'
                    exact
                    component={Profile}
                />        
                <Route
                    path='/signup'
                    exact
                    component={Signup} />
                <Route
                    path='/login'
                    exact
                    component={Login} />
                <Route
                    path='/unauthorized'
                    exact
                    component={Unauthorized} />
            </Switch>
        
        )

}