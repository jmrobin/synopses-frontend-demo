// /src/services/versionService.js

import Axios from 'axios';

// const apiUrl = 'http://localhost:3001/versions';
const apiUrl = 'https://synopses-backend.herokuapp.com/versions';

export function getVersion (id) {
    return Axios.get(apiUrl + '/' + id);
}

export function deleteVersion (id) {
    return Axios.delete(apiUrl + '/' + id);
}

export function saveVersion (version) {
    const body = { ...version };
    delete body.id;
    if (version.id) {
        return Axios.put(apiUrl + '/' + version.id, body);
    }
    else {
        return Axios.post(apiUrl, body)
    }
}

export function getPublishedVersions () {
    return Axios.get(apiUrl + '/published');
}

export function getVersionsByAuthorId (id) {
    return Axios.get(apiUrl + '/author/' +id);
}

export default {
    getVersion,
    deleteVersion,
    saveVersion,
    getPublishedVersions,
    getVersionsByAuthorId
}