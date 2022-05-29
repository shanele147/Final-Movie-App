import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-carousel.css";

export default class SimpleSlider extends Component {
    render() {
        const { nowPlaying } = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1, 
            centerMode: true,
        };
        return (
            <div id="movie-slider">
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                    </div>
                    <div>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                        <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                    </div>
                </Slider>
            </div>
        );
    }
}