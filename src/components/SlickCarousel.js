import React, {Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-carousel.css";
import { API_KEY, base_URL, image_url } from "../constant/const-key";

export default class SimpleSlider extends Component {
    render() {  
        const { nowPlaying, idList } = this.props;
        console.log(nowPlaying, idList);
        const settings = {
            dots: true,
            infinite: true,
            // speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1, 
            centerMode: true,
            autoplay: false,
            autoplaySpeed: 2000,
            pauseOnHover: true,
        };

        const filerMovies = nowPlaying.filter((movie) => movie.vote_average > 7.5)
        const posterURLs = filerMovies.map((movie, index) => { 
            const {title, overview, backdrop_path, release_date, vote_average} = movie;
            return (
                <>
                    <div className="item-carousel" key={index} style={{
                        backgroundImage: `url("${image_url}${backdrop_path}?api_key=${API_KEY}&language=en-US)"`,
                        backgroundSize: "cover",
                        height: "75vh",
                    }}>
                        <div className="overlay">
                            <div className="text-container m-auto" >
                                <h2 className="big-title">{title}</h2>
                                <p>{overview}</p>
                            </div>
                        </div>

                    </div>
                </>              
                    
            );
        } );

        return (
            <div id="movie-slider">
                <Slider {...settings}>
                    { posterURLs}
                    {/* <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w75 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w75 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w75 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w75 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w75 m-auto" alt="..." />
                    </div> */}
                </Slider>
            </div>
        );
    }
}