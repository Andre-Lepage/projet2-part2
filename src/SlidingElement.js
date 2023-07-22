import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pokemon from './assets/pokemon-game.jpg';
import codm from './assets/call-of-duty-mobile.jpg';
import stardew from './assets/stardew-valley.jpg';
import oververwatch from './assets/overwatch-sliding.jpg';
import league from './assets/League-of-Legends-sliding.jpg';
import './index.css';
import { useNavigate } from 'react-router-dom';

const SlidingElement = () => {

    const navigate = useNavigate();
    const handleImageClick = (game) => {
    navigate(`/ReviewPage/${game}`);

    };

  return ( 
    <div className="all">
        <div className="featured">
            <h2>Featured Games</h2>
        </div>
        
        <div className="carouselWrap" >
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false} >
            
                <div onClick={() => handleImageClick("overwatch")}>
                    
                    <p className="legend">Overwatch</p>
                    
                        <img className = "carousel-image"  src={oververwatch} />
                    
                    
                    
                </div>
            
            
                <div onClick={() => handleImageClick("cod")}>
                    
                        <p className="legend">Call of Duty Mobile</p>
                    
                        <img className = "carousel-image"  src={codm} />
                    
                    
                    
                </div>
            
            
                <div onClick={() => handleImageClick("lol")}>
                    
                        <p className="legend">League Of Legends</p>
                    
                        <img className = "carousel-image"  src={league} />
                    
                    
                    
                </div>
            
            
        </Carousel>
    </div>
    </div>
    
    
  );
};

export default SlidingElement;