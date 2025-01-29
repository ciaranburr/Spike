import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {AfcChampionship} from './pages/AfcChampionship'
import {NfcChampionship} from './pages/NfcChampionship'
import {Loading} from './pages/Loading'

{/* https://www.youtube.com/watch?v=xMYo9jaMah8 used to help set up routes*/}

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="loading" element={<Loading />} />
                <Route path="nfc" element={<NfcChampionship />} />
                <Route path="afc" element={<AfcChampionship />} />
            </Routes>
        </Router>
    )
}