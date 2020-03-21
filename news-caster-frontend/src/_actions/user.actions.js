import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    signUp,
    getUserProfile
};
function signUp(email,username, password) {
    return dispatch => {
        dispatch(request({ email,username,password }));

        userService.signUp(email,username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    window.location ='/profile';
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}
function login(email, password) {
    return dispatch => {
        dispatch(request({ email,password }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    window.location ='/profile';
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    window.location='/login';
    return { type: userConstants.LOGOUT };
}

function getUserProfile() {
    return dispatch => {
        dispatch(request());

        userService.getUserProfile()
            .then(
                userProfile => {
                    dispatch(success(userProfile))
                },
                error => {
                    dispatch(failure(error))
                }
            );
    };

    function request() { return { type: userConstants.USERS_PROFILE_REQUEST } }
    function success(userProfile) { return { type: userConstants.USERS_PROFILE_SUCCESS, userProfile } }
    function failure(error) { return { type: userConstants.USERS_PROFILE_FAILURE, error } }
}