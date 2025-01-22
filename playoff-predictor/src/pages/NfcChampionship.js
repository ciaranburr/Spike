import { useNavigate } from 'react-router-dom';

import aura from '../images/commanders_aura.jpeg';  
import cool from '../images/commanders_cool.jpeg';  

export const NfcChampionship = () => {
    const navigate = useNavigate();

    return(
        <div className="outer-container">
            <div className="inner-container">
                <img src={aura} />
                <img src={cool} />
                <p>GOOOOOOO COMMANDERS!!!!!!!! <br/> 1000000000000:0</p>
                <button onClick={() => navigate('/')}>Predict again</button>
            </div>
        </div>         
    );
}