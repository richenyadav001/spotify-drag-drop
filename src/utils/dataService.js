import axios from 'axios';

export const setAuthHeader = (authToken) => {
    localStorage.setItem('access_token', authToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}

export const doRequest = async (url, method) => {
    const authToken = localStorage.getItem('access_token');
    const header = {
        headers: {
            'Authorization': `Bearer ${authToken}`
        }
    }
    return makeCall(url, header);
}

async function makeCall(url, headers) {
    const result = await axios.get(url, headers);
    return result.data;
}

