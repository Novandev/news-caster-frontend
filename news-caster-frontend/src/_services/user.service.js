// import config from 'config';
import axios from 'axios'

export const userService = {
    login,
    logout,
    signUp,
    getUserProfile
};

function signUp(email,username, password) {
    let data ={"email":email,"username":username, "password":password}
    let signupHeaders: {"Content-Type": "application/json"}

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.post("http://127.0.0.1:8080/api/v1.0/auth/register", data,{signupHeaders})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let {user,token} =result.data;
            let {email, userName} = user
            let newUser ={
                "username": userName,
                "token":token,
                "email":email
            }
            localStorage.setItem('user', JSON.stringify(newUser));

            return newUser;
        });
}

function login(username, password) {
    let data ={"username":username, "password":password}
    let headers: {"Content-Type": "application/json"}

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.post("http://127.0.0.1:8080/api/v1.0/auth/login", data,{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let {user,token} =result.data;
            let {email, userName} = user
            let validUser ={
                "username": userName,
                "token":token,
                "email":email
            }
            localStorage.setItem('user', JSON.stringify(validUser));

            return validUser;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUserProfile() {

    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Bearer ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.get("http://127.0.0.1:8080/api/v1.0/auth/check",{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let userProfile = result.data.user;
            // localStorage.setItem('user', JSON.stringify(user));
            return userProfile;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location='/login';
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}