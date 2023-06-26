//Base API https://api.themoviedb.org/3/
//url da api https://api.themoviedb.org/3/movie/now_playing?api_key=345479cb930369b85a569088034d06b9

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;