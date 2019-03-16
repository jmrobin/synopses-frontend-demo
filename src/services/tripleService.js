// /src/services/tripleService.js

import Axios from 'axios';

// const apiUrl = 'http://localhost:3001/triple';
const apiUrl = 'https://synopses-backend.herokuapp.com/triple';

export function saveTriple(triple) {
    return Axios.post(apiUrl, triple);
}

export default {
    saveTriple
}