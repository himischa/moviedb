const API_ENDPOINT = {
    NOW_PLAYING: '/.netlify/functions/movies?type=now_playing',
    UPCOMING: '/.netlify/functions/movies?type=upcoming',
    DETAIL: (id) => `/.netlify/functions/movies?type=detail&id=${id}`,
};

export default API_ENDPOINT;
