import { useNavigate } from 'react-router-dom';

export const NfcChampionship = () => {
    const navigate = useNavigate();

    return(
        <div>
            <p>hello</p>
            <button onClick={() => navigate('/')}>Predict again</button>
        </div>        
    );
}