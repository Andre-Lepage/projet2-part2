import './index.css';

const NotFound = () => {
    return ( 
        <div>
            <div className="titleWrap">
                <div className="title">
                    
                    <h1 className='Error-Message'>Error404</h1><br></br>
                    <h3>You have gone outside of the map boundaries</h3>
                </div>
                <div id= "return-home-button-wrapper">
                    <a href="/">
                        <button id ="return-home-button"> Return to home</button>
                    </a>
                    
                </div>
                
            </div>
        </div>
     );
}
 
export default NotFound;