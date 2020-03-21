// import config from 'config';
import axios from 'axios'

export const userService = {
    login,
    logout,
    signUp,
    getUserProfile
};

function signUp(email,username, password) {
    let data ={"user":{"email":email,"username":username, "password":password}}
    let signupHeaders: {"Content-Type": "application/json"}

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.post("http://127.0.0.1:8000/api/v1/users/", data,{signupHeaders})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let {username,token} =result.data.user;
            let user ={
                "username": username,
                "token":token
            }
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function login(email, password) {
    let data ={"user":{"email":email, "password":password}}
    let headers: {"Content-Type": "application/json"}

    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.post("http://127.0.0.1:8000/api/v1/users/login/", data,{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let {username,token} =result.data.user;
            let user ={
                "username": username,
                "token":token
            }
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getUserProfile() {

    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Token ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.get("http://127.0.0.1:8000/api/v1/profile",{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let userProfile = result.data.user;
            // localStorage.setItem('user', JSON.stringify(user));
            console.log(userProfile)
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