import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieService from '../../services/MovieService';
import { API_KEY, image_url } from "../../constant/const-key";
import "./MovieDetail.css";


const MovieDetail = () => {
    const params = useParams();
    console.log(params);
    const [movieInfo, setMovieInfo] = useState([]);

    async function fetchMovieDetail() {
        const movieDetail = await MovieService.getMovieDetail(params.id);
        setMovieInfo(movieDetail);
    }

    useEffect(() => {
        fetchMovieDetail();
    }, []);

    console.log(movieInfo);
    const { original_title: title, backdrop_path, poster_path, homepage, overview, release_date, imdb_id, genres, runtime, production_companies } = movieInfo ? movieInfo : undefined;
    
    const genreList = genres && genres.map((genre) =>
        <li>{genre.name}</li>);
    const released = release_date && MovieService.convertToHumanDate(release_date);

    return (       
        <>
            <div className='container section-wrapper'>
                <div className='row'>
                    <div className='col-5 col-md-6 col-sm-12'>
                        <div className='hero-img'>
                            <img src={`${image_url}${poster_path}?api_key=${API_KEY}&language=en-US)`}></img>
                        </div>
                    </div>
                    <div className='col-7 col-md-6 col-sm-12'>
                        <h2 className='big-title detail-title'>{title}</h2>
                        <h5>({released})</h5>
                        <ul>{genreList}</ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetail