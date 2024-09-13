import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import LogoDark from "../../image/navbar/LogoDark.png";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <nav className="navbar navbar-expand-md px-2 navbar-dark sticky-top" style={{ backgroundColor: "#171c28" }}>
            <div className="container-fluid">
                {/* Navbar Brand/Logo */}
                <Link to="/" className="navbar-brand">
                    <img src={LogoDark} alt="Logo" style={{ height: "2.5rem" }} />
                </Link>

                {/* Toggler Button for Mobile */}
                <button className="navbar-toggler" type="button" onClick={toggleSidebar} aria-expanded={isSidebarOpen}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Sidebar for Mobile */}
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                    <button className="close-btn" onClick={toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='bg-light' height="26" viewBox="0 96 960 960" width="26">
                            <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                        </svg>
                    </button>
                    <ul className="sidebar-menu text-light" style={{ backgroundColor: "#171c28" }}>
                        <li><Link to="/" className="text-light" onClick={toggleSidebar}>Home</Link></li>
                        <li><Link to="/about" className="text-light" onClick={toggleSidebar}>About</Link></li>
                        <li><Link to="/experience" className="text-light" onClick={toggleSidebar}>Experience</Link></li>
                        <li><Link to="/project" className="text-light" onClick={toggleSidebar}>Projects</Link></li>
                        <li><Link to="/education" className="text-light" onClick={toggleSidebar}>Education</Link></li>
                        {/* <li><Link to="/resume" className="text-light" onClick={toggleSidebar}>Resume</Link></li> */}
                        <li><Link to="/contact" className="text-light" onClick={toggleSidebar}>Contact Me</Link></li>
                    </ul>
                </div>

                {/* Collapsible Menu for Desktop */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto d-none d-md-flex">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/experience" className="nav-link">Experience</Link></li>
                        <li className="nav-item"><Link to="/project" className="nav-link">Projects</Link></li>
                        <li className="nav-item"><Link to="/education" className="nav-link">Education</Link></li>
                        <li className="nav-item"><Link to="/resume" className="nav-link">Resume</Link></li>
                        <li className="nav-item contact-button-hide"><Link to="/contact" className="nav-link ">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;