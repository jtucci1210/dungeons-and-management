import axios from 'axios';

export const join = (char) => {
    return axios.post('/api/users/register', char);
};

