import Navbar from './Navbar';
import Title from "./Title";
import SlidingElement from './SlidingElement';

import './index.css';
const Home = () => {
    return ( 
        <div className="Home">
        <div className="top">
          <Navbar></Navbar>
          <div className="content">
            <Title />
          </div>
          <hr></hr>
        </div>
        <div className="bottom">
          <SlidingElement/>
        </div>
      </div>
     );
}
 
export default Home;
