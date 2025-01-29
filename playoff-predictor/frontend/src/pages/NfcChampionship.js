import { useNavigate } from 'react-router-dom';

import aura from '../images/commanders_aura.jpeg';  
import cool from '../images/commanders_cool.jpeg';  

import React, { useState, useEffect } from 'react'; //need to import the data

export const NfcChampionship = () => {
    const navigate = useNavigate();
    const [gameScore, setGameScore] = useState(null); //store scores

    //https://chatgpt.com/c/6799cd82-59c8-8011-a8d0-a40aa423b480 grab scores from my backend
        // grab from backend
        useEffect(() => {
            const fetchScores = async () => {
                try {
                    const response = await fetch('GAME_SCORES');
                    const data = await response.json();
                    // only bills chiefs
                    const comEaglesGame = data.result.find(game => 
                        (game.teams.includes("Washington Commanders") && game.teams.includes("Philadelphia Eagles"))
                    );
                    setGameScore(comEaglesGame); // filter game now state
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
                    <img src={aura} />
                    <img src={cool} />
                    <p>GOOOOOOO COMMANDERS!!!!!!!! <br/> 1000000000000:0</p>
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