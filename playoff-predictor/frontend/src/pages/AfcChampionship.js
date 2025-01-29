import { useNavigate } from 'react-router-dom';
import './styles/home.css'; // Import the CSS file

import React, { useState, useEffect } from 'react'; //need to import the data

import bills from '../images/bills_team.jpeg';  
import players from '../images/bills_aura.jpeg';  


export const AfcChampionship = () => {
    const [gameScore, setGameScore] = useState(null); //store scores
    const navigate = useNavigate();

    //https://chatgpt.com/c/6799cd82-59c8-8011-a8d0-a40aa423b480 grab scores from my backend
        // grab from backend
        useEffect(() => {
            const fetchScores = async () => {
                try {
                    const response = await fetch('GAME_SCORES'); //https://spike-vddi.onrender.com/api/gamescore
                    const data = await response.json();
                    // only bills chiefs
                    const billsChiefsGame = data.result.find(game => 
                        (game.teams.includes("Kansas City Chiefs") && game.teams.includes("Buffalo Bills"))
                    );
                    setGameScore(billsChiefsGame); // filter game now state
                } catch (error) {
                    console.error('Error fetching scores:', error);
                }
            };

            fetchScores();
        }, []); // Empty dependency array to run once when the component mounts

    return(
        <div>
            <h1>Expectations</h1>
            <div className="outer-container">
                <div className="inner-container">
                    <img src={bills} alt = "Bills logo" />
                    <img src={players} alt = "Bills Players" />
                    <p>GOOOOOOO BILLLSS!!!!!!!! <br/> 10000:0</p>
                    <button onClick={() => navigate('/')}>Predict again</button>
                </div>
            </div>
            <h1>Reality</h1>
            {/*https://chatgpt.com/c/6799cd82-59c8-8011-a8d0-a40aa423b480 displays scores from backend*/}
            <div>
                {gameScore ? (
                    <div>
                        <h2>Game Results:</h2>
                        <h3>{gameScore.game}</h3>
                        <p>{gameScore.scores[0]} - {gameScore.scores[1]}</p>
                    </div>
                ) : (
                    <p>Loading game score...</p>
                )}
            </div>

        </div>        
    );
}