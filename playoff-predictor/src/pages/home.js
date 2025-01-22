import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from './Loading'; // imports loading symbol from page

import chiefs from '../images/chiefs.png';  
import bills from '../images/bills.png';  
import commanders from '../images/commanders.avif';
import eagles from '../images/eagles.png';  

import './styles/home.css'; // Import the CSS file

export const Home = () => {
    const navigate = useNavigate(); // use the hook to define navigate
    const [loading, setLoading] = useState(false);

    const handleNavigation = (route) => {
        setLoading(true); 
        setTimeout(() => {
            navigate(route); // navigate after 3 seconds
        }, 3000);
    };

    return (
        <div className="outer-container">
            {loading ? ( //if we clicked (are loading), show it
                <div> 
                    <Loading /> 
                    <p>Calculating...</p>
                </div>
            ) : (
                <div className="inner-container">
                    <p>Please pick one of the games and we will predict who will win:</p>
                    <div className="matchup">
                        <img src={commanders} className="team-logo" />
                        <span className="vs-text">vs</span>
                        <img src={eagles} className="team-logo" />
                    </div>
                    <button onClick={() => handleNavigation('/nfc')} className="button">NFC Championship</button>
                    <div className="matchup">
                        <img src={chiefs} className="team-logo" />
                        <span className="vs-text">vs</span>
                        <img src={bills} className="team-logo" />
                    </div>
                    <button onClick={() => handleNavigation('/afc')} className="button">AFC Championship</button>
                </div>
            )}
        </div> 
    );
};
