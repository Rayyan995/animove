import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://animation-movies-fb.firebaseio.com/'
});

export default instance;