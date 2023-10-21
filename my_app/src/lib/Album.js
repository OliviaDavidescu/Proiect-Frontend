import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/Album1.jpg';
import img2 from '../assets/Album2.jpg';
import img3 from '../assets/Album3.jpg';
import img4 from '../assets/Album4.jpg';
import img5 from '../assets/Album5.jpg';

class Gallery extends React.Component {
    render() {
        return (
            <div className='slide'>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    <div>
                        <img className='img' src={img1} alt="" />
                        <p className="legend">Lansare Lampioane</p>
                    </div>
                    <div>
                        <img className='img' src={img2} alt="" />
                        <p className="legend">Targ de Carte</p>
                    </div>
                    <div>
                        <img className='img' src={img3} alt="" />
                        <p className="legend">Cinema in Aer Liber</p>
                    </div>
                    <div>
                        <img className='img' src={img4} alt="" />
                        <p className="legend">Plantat Copaci</p>
                    </div>
                    <div>
                        <img className='img' src={img5} alt="" />
                        <p className="legend">Festival</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Gallery