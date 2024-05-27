import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './assets/components/header/Navbar';
import Home from './assets/components/Home';
import About from "./assets/components/About";
import Education from "./assets/components/Education";
import Footer from './assets/components/Footer';
import Experience from "./assets/components/Experience";
import Project from "./assets/components/Project";
import Resume from "./assets/components/Resume";
import Contact from "./assets/components/Contact";
import "./App.css";

function App() {
    return (
        <div style={{ backgroundColor: "#171c28" }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/education" element={<Education />} />
                    <Route exact path="/experience" element={<Experience />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/resume" element={<Resume />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;