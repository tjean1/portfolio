import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Footer from '../Footer';
import Navbar from '../Navbar';

const index = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/skills" exact element={<Skills />} />
                    <Route path="/*" element={<Navigate replace to="/" />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default index;
