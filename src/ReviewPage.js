import Navbar from "./Navbar";
import NotFound from "./NotFound";
import placeholder from "./assets/placeholder.png";

import ActiveChart from "./ActiveChart";
import HoursSpentChart from "./HoursSpentChart.tsx";
import ReviewList from "./ReviewList";

import { useState, useEffect} from 'react';
import data from "./ReviewData";
import { useParams} from 'react-router-dom';

import spidermanReview1 from './assets/spider-man-review1.jpg';
import spidermanReview2 from './assets/spider-man-review2.jpg';

import overwatchReview1 from './assets/overwatch-review1.jpg';
import overwatchReview2 from './assets/overwatch-review2.jpg';

import codReview1 from './assets/cod-review1.jpg';
import codReview2 from './assets/cod-review1.jpg';

import cs2Review1 from './assets/cs2-review1.jpg';
import cs2Review2 from './assets/cs2-review2.jpg';

import leagueReview1 from './assets/league-review1.jpg';
import leagueReview2 from './assets/league-review2.jpg';





const ReviewPage = () => {

    const defaultGame = {
        game: "",
        title: "",
        paragraph1: "",
        paragraph2: "",
        paragraph3: "",
        imageURL1: placeholder,
        imageURL2: placeholder, 
        commentTitle1:"",
        commentTitle2: "",
        commentAuthor1: "",
        commentAuthor2: "",
        commentBody1: "",
        commentBody2: "",
        active01: 4000,
        active02: 1500,
        active03: 9000,
        active04: 12000,
        active05: 6500,
        active06: 8500,
        active07: 3000,
        under10: 400,
        ten50: 300,
        fifty100: 300,
        hundred500: 200,
        fiveHundred1000: 278,
        over1000: 189,
    }

    const [reviewData, setReviewData] = useState(defaultGame);

    const { game } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // This useEffect hook will update the filteredList based on the category in the URL
        if(game != null & game != "" ){
            const displayedGame = data.find(item => item.game == game);
            setReviewData(displayedGame);
            setLoading(false);
        }
        
 
      }, [game]);

    const switchToReview = (event) => {
        const stats = document.getElementById("stats")
        const review = document.getElementById("review")
        stats.style.display = 'none';
        review.style.display = ''
    }

    const switchToStats = (event) => {
        const stats = document.getElementById("stats")
        const review = document.getElementById("review")
        stats.style.display = 'block';
        review.style.display = 'none'
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (!reviewData) {
    return <NotFound></NotFound>;
    }
    

    return ( 
        <div>
            
            <div className="title-reviews">
                <Navbar></Navbar>
                <h1>{reviewData.name}</h1>
                <br></br>
                <button onClick={switchToReview} className="button-review">Review</button>
                <button onClick={switchToStats}className="button-stats">Stats</button>
            </div>

            <div id="review">
                <div className="title">
                    <h3 className="review-title"> {reviewData.title} </h3>
                </div>
                <div className="review-content">
                    <p className="review-text">{reviewData.paragraph1}</p>
                    <img className="review-image"src={reviewData.imageURL1}></img>  
                </div>
                <div className="review-content">
                    <img className="review-image"src={reviewData.imageURL2}></img>  
                    <p className="review-text">{reviewData.paragraph2}</p>
                </div>
                <div className="review-content">
                    <p className="review-text">{reviewData.paragraph3}</p>
                     
                </div>
                        
            </div>

            
            <div id="stats">
                <div className="title">
                    <h3 className="stats-title"> Game Stats</h3>
                </div>
                <div className="charts">
                    <div className="active-player-chart">
                        <h4>Active Monthly Players</h4>
                        <ActiveChart
                         active01= {reviewData.active01}
                         active02= {reviewData.active02}
                         active03= {reviewData.active03}
                         active04= {reviewData.active04}
                         active05= {reviewData.active05}
                         active06= {reviewData.active06}
                         active07= {reviewData.active07}
                         
                        ></ActiveChart>
                    </div>
                    <div className="active-player-chart">
                        <h4>Hours Spent on Game After Buying</h4>
                        <HoursSpentChart
                        under10= {400} 
                        ten50= {300}
                        fifty100= {300}
                        hundred500= {200}
                        fiveHundred1000= {278}
                        over1000= {189}
                        ></HoursSpentChart>
                    </div>
                </div>
            </div>

            <div className="comments">
                <div className="title">
                    <h3 className="community-title">Comments</h3>
                    <ReviewList
                     author1={reviewData.commentAuthor1}
                     title1={reviewData.commentTitle1}
                     body1={reviewData.commentBody1}
                     author2={reviewData.commentAuthor2}
                     title2={reviewData.commentTitle2}
                     body2={reviewData.commentBody2}
                     >   
                    </ReviewList>
                </div>
            </div>

        </div>
         );
        
}
 
export default ReviewPage;