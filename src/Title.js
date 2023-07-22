import starBackground from './assets/star-background.jpg';
import './index.css';

const Title= () => {
    return ( 
        <div className="titleWrap">
            <div className="title">
                <h1>Welcome to Virtual Odyssey</h1>
                <h3>The ultimate gaming wiki for reviews and statistics</h3>
            </div>
            <div id = "home-button-wrapper">
                <a href="/Results/all">
                    <button id ="home-button">All Games</button>
                </a>
                
            </div>
            
        </div>
            
            
     );
}
 
export default Title;