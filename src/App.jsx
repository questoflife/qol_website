import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import SupportUs from './pages/SupportUs';
import Header from "./components/header";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/support-us" element={<SupportUs />} />
            </Routes>
        </Router>
    );
}

export default App;