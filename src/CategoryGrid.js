import React from 'react';
import './index.css'; 
import ConsoleGames from "./assets/Console-Games.png";
import AllGames from "./assets/All-Games.png";
import MobileGames from "./assets/Mobile-Games.png";
import FPSGames from "./assets/FPS-Games.png";
import ArcadeGames from "./assets/Arcade-Games.png";
import moba from "./assets/moba.png"
import { useNavigate} from 'react-router-dom';

const CategoryGrid = () => {
  
  const navigate = useNavigate();
  const gridData = [
    { imageUrl: AllGames, text: 'All Games', category: "all" },
    { imageUrl: ConsoleGames, text: 'Console Games', category: "console" },
    { imageUrl: MobileGames, text: 'Mobile Games', category: "mobile" },
    { imageUrl: FPSGames, text: 'FPS Games', category: "fps" },
    { imageUrl: moba, text: 'MOBA Games', category: "moba" },
    { imageUrl: ArcadeGames, text: 'Arcade Games', category: "arcade" },
  ];

  const handleImageClick = (category) => {
    navigate(`/Results/${category}`);
  };

  return (
    <div className="grid-container">
      {gridData.map((item, index) => (
        <div key={index} className="grid-item" onClick={() => handleImageClick(item.category)}>
            {item.text && <p className='grid-text'>{item.text}</p>}
            {item.imageUrl && <img className="grid-image" src={item.imageUrl} alt={` ${index}`} />}
          
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;