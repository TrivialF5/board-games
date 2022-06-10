import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Select from '../views/simon/Select';
import Loading from '../views/simon/Loading';

const RoutesConfig = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path= "/loading" element={<Loading />} />
                <Route path="/simon" element={<Select />} />
            </Routes>
        </Router>
    )
}

export default RoutesConfig