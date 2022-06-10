import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import PlaySimon from '../views/simon/PlaySimon';
import Select from '../views/simon/Select';

const RoutesConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/simon" element={<Select />} />
                <Route path="/simon/play/:instrument/:difficulty" element={<PlaySimon />} />
            </Routes>
        </Router>
    )
}

export default RoutesConfig