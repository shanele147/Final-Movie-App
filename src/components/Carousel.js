import React, { useState, useEffect} from 'react';
import MovieService from '../services/MovieService';

function Carousel(props) {
    const { nowPlaying } = props;
    console.log(nowPlaying);
    let idArr = nowPlaying.map((movie) => movie.id);
    // gán state ban đầu là mảng các id của movie now playing
    const [id, setId] = useState([...idArr]);
    
    const [images, setImages] = useState([]);


  return (
      <div id="carouselNowPlaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselNowPlaying" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselNowPlaying" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselNowPlaying" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src="./logo512.png" className="d-block w-50 m-auto" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                  </div>
              </div>
              <div className="carousel-item">
                  <img src="./logo192.png" className="d-block w-50 m-auto" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                  </div>
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselNowPlaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselNowPlaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
          </button>
      </div>
  )
}

export default Carousel