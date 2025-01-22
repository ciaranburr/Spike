import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from './Loading'; // imports loading symbol from page

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
        <div>
            {loading ? (
                <Loading /> // if we clicked (are loading), show it
            ) : (
                <div>
                    <p>Please pick one of the games and we will predict who will win:</p>
                    <button onClick={() => handleNavigation('/nfc')}>NFC Championship</button>
                    <button onClick={() => handleNavigation('/afc')}>AFC Championship</button>
                </div>
            )}
        </div>
    );
};
