import axios from 'axios';

const api = axios.create({
    baseURL: 'https://baseado-em-amor-api.herokuapp.com/'
});

export default api;