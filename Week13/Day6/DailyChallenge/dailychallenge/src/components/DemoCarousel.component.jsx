import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './DemoCarousel.component.css';

export function DemoCarousel() {
  return (
    <div className="container">
        <Carousel>
            <div>
                <img src="src/assets/1.jpeg" />
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="src/assets/2.jpeg" />
                <p className="legend">Macao</p>
            </div>
            <div>
                <img src="src/assets/3.jpeg" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="src/assets/4.jpeg" />
                <p className="legend">Las Vegas</p>
            </div>
        </Carousel>
    </div>
  );
}

export default DemoCarousel();