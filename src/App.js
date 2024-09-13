import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './assets/components/header/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Education from './assets/components/Education';
import Experience from './assets/components/Experience';
import Project from './assets/components/Project';
import Resume from './assets/components/Resume';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
import './App.css';

function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Saurabh Kumars - Portfolio/Home";
        } else {
            document.title = `Saurabh Kumar - Portfolio/${location.pathname[1].toUpperCase() + location.pathname.slice(2)}`;
        }
    }, [location.pathname]);

    return (
        <div style={{ backgroundColor: "#171c28" }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;