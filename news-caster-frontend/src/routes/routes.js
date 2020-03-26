import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Interests from '../pages/Interests/Interests';
import NewInterest from '../pages/Interests/NewInterest';
import Interest from '../pages/Interests/Interest';
import EditInterest from '../pages/Interests/EditInterest';
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

                <ProtectedRoute
                    path='/interests'
                    exact
                    component={Interests}
                />

                <ProtectedRoute
                    path='/new-interest'
                    exact
                    component={NewInterest}
                />
                <ProtectedRoute
                    path='/interests/:id'
                    exact
                    component={Interest}
                />

                <ProtectedRoute
                    path='/interests/:id/edit'
                    exact
                    component={EditInterest}
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