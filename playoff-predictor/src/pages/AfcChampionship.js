import { useNavigate } from 'react-router-dom';
import './styles/home.css'; // Import the CSS file

import bills from '../images/bills_team.jpeg';  
import players from '../images/bills_aura.jpeg';  


export const AfcChampionship = () => {
    const navigate = useNavigate();
    

    return(
        <div className="outer-container">
            <div className="inner-container">
                <img src={bills} />
                <img src={players} />
                <p>GOOOOOOO BILLLSS!!!!!!!! <br/> 10000:0</p>
                <button onClick={() => navigate('/')}>Predict again</button>
            </div>
        </div>         
    );
}