const isDev = process.env.NODE_ENV !== 'production';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'en-us';

const API_ENDPOINT = isDev ? {
    NOW_PLAYING: `${BASE_URL}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=${LANGUAGE}&page=1`,
    UPCOMING: `${BASE_URL}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=${LANGUAGE}&page=1`,
    DETAIL: (id) => `${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`,
} : {
    NOW_PLAYING: '/.netlify/functions/movies?type=now_playing',
    UPCOMING: '/.netlify/functions/movies?type=upcoming',
    DETAIL: (id) => `/.netlify/functions/movies?type=detail&id=${id}`,
};

export default API_ENDPOINT;
