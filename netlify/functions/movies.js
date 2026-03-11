const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;
const LANGUAGE = 'en-us';

exports.handler = async (event) => {
    const { type, id } = event.queryStringParameters || {};

    let url;
    if (type === 'now_playing') {
        url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
    } else if (type === 'upcoming') {
        url = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=1`;
    } else if (type === 'detail' && id) {
        url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    } else {
        return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request' }) };
    }

    const response = await fetch(url);
    const data = await response.json();

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    };
};
