import axios from "axios";
import { API_KEY, base_URL, image_url } from "../constant/const-key";
export const MOVIE_UPCOMING = "upcoming";
export const MOVIE_POPULAR = "popular";
export const MOVIE_TOP_RATED = "top_rated";
export const MOVIE_NOW_PLAYING = "now_playing";

// create an object MovieService has many keys (functions)
const MovieService = {
    getMovieByType: (type) => { 
        return axios.get(`${base_URL}/${type}?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response => response.data.results);
    },
    getMoviePoster: (poster_path) => { 
        return axios.get(`${image_url}/${poster_path}?api_key=${API_KEY}&language=en-US`)
            .then(response => response.data);
    }
 } 
// export default khi import không cần dùng destructuring
export default MovieService