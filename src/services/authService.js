// /src/services/authService.js

import Axios from 'axios';
import bcrypt from 'bcryptjs';

const apiUrl = 'http://localhost:3001/authors/username/';

export async function login(username, password) {
    const { data } = await Axios.get(apiUrl + username);
    const author = data[0];
    if(author && bcrypt.compareSync(password, author.password)) {
        delete author['password'];
        console.log({ author: author });
        sessionStorage.setItem('token', JSON.stringify(author));
    }
}

export function logout () {
    sessionStorage.removeItem('token');
}

export function getCurrentUser () {
    try{
        return JSON.parse(sessionStorage.getItem('token'));        
    }
    catch(ex) {
        return null;
    }    
}

export default {
    login,
    logout,
    getCurrentUser
}