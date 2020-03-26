import axios from 'axios'

export const interestService = {
    getAllInterests,
    getOneInterest,
    postNewInterest,
    getOneEditInterest,
    editOneInterest
};


function getAllInterests() {

    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Bearer ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.get("http://127.0.0.1:8080/api/v1.0/interests/",{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let interests = result.data;

            return interests;
        });
}



function getOneInterest(id) {
    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Bearer ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.get(`http://127.0.0.1:8080/api/v1.0/interests/${id}`,{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let interest = result.data;
            // localStorage.setItem('user', JSON.stringify(user));
            return interest;
        });
}


function postNewInterest(category,rank) {
    let data = {
        "category":category,
        "rank": rank,
    }
    
    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Bearer ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.post('http://127.0.0.1:8080/api/v1.0/interests/',data,{headers})
        .then(result => {

            let interest = result.data;

            return interest;
        });
}


function getOneEditInterest(id) {
    let token = JSON.parse(localStorage.getItem('user'))['token'];
    let tokenString =`Bearer ${token}`
    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.get(`http://127.0.0.1:8080/api/v1.0/interests/${id}`,{headers})
        .then(result => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            let interest = result.data;
            // localStorage.setItem('user', JSON.stringify(user));
            return interest;
        });
}




function editOneInterest(category,rank,interestId) {
    let data = {
        "category":category,
        "rank": rank,
    }
    let token = JSON.parse(localStorage.getItem('user'))['token'];

    let tokenString =`Bearer ${token}`;

    let headers = {
        "Content-Type": "application/json",
        "Authorization": tokenString
    }
    // return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    return axios.put(`http://127.0.0.1:8080/api/v1.0/interests/${interestId}`,data,{headers})
        .then(result => {

            let interest = result.data;

            return interest;
        });
}