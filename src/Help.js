import Navbar from "./Navbar";
import './index.css'; 
import React, { useRef } from 'react';
import helpCategory from './assets/help-categories-nav.png';
import helpStats from './assets/help-stats.png';

const Help = () => {

    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        document.getElementById("help-confirmation").style.display="block"
        formRef.current.reset();
    }

    const resetForm = (event) => {
        document.getElementById("help-confirmation").style.display="none"
        
    }
    return ( 
        <div>
          <header>
      <Navbar></Navbar>
      </header>
      <div className="title">
        
          <h1 className="join-title">Help</h1>
          <h4 className="helpStep">What are all these abbreviations?</h4>
          <p className="helpParagaph"><strong>What does MOBA mean?</strong><br></br> 
          MOBA stands for <em>multiplayer online battle arena</em>. It is a subgenre of strategy video games in which two teams of players compete against each other on a predefined battlefield
          </p>

          <p className="helpParagaph"><strong>What does FPS mean?</strong><br></br> 
          FPS stands for <em>first person shooter</em>. It is a sub-genre of shooter video games centered on gun and other weapon-based combat in a first-person perspective
          </p>
          

          <h4 className="helpStep">How does the website work?</h4>

          <p className="helpParagaph"><strong>How to find game reviews?</strong><br></br> 
            Click on the Categories tab in the navbar. <br></br>
            <img src = {helpCategory} id = "help-categories" alt = "showing how to get to the Categories page with the navbar" ></img><br></br>
            Once on the categories page you will find 6 categories. Choose the category you want and an you will see games of that category on the Results page. You can use the filters 
            as well to show different categories once on the results page. Pick a game to see that games review and statistics
          </p>


          <p className="helpParagaph"><strong>What to do once on the review page?</strong><br></br> 
            Once on the review page of the game you picked, tou can read that games review. If you want to see the statistics
            related to that game simply click on the statistics tab show below the name of the game. <br></br>
            <img src = {helpStats} id = "help-stats" alt = "showing how to get to the stats on a review page" ></img><br></br>
            To see the comments, Scroll downto the bottom of the page. Here you can add your own comment as well.
          </p>

          <h4 className="helpStep">Didn't get the help you're looking for? Ask us a question here</h4>
          <form ref={formRef} onSubmit={handleSubmit}>
          <div className="addReview">
                    <div className="name-title">
                        <div className="name-component">
                            <label className="comment-label" for="help-comment-email ">Email:</label><br/>
                            <input type="email" placeholder="example@gmail.com" aria-label="example@gmail.com" id="help-comment-email" name="help-comment-email" aria-required="true" required  onChange={resetForm} /><br/>
                        </div>
                        <div>
                            <label className="comment-label" for="help-title-input">Question Title:</label><br/>
                            <input type="text" id="help-title-input" name="help-title-input" aria-required="true" required onChange={resetForm}/><br/><br/>
                        </div>

                    </div>
                    <div className="name-title">
                        
                        <div className="comment-component">
                            <label className="comment-label align-left" for="help-comment">Type out your question here and we will get back to you as soon as we can</label>
                            <textarea rows="5" id="help-comment" name="help-comment" aria-required="true" required onChange={resetForm} ></textarea>
                            <input className="submit commentSubmit" type="submit" value="Submit" aria-label="Submit Question" />
                        </div>
                        
                    </div>
                    
                    <div id="help-confirmation" aria-live="assertive" role="alert">
                        <h3>We have received Your question and will get <br></br>back to you as soon as possible!</h3>
                    </div>
            </div>
        </form>
          

          
          
          
        
      </div>
    </div>
     );
}
 
export default Help;