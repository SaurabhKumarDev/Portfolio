import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import LogoDark from "../../image/navbar/LogoDark.png"

function Navbar() {
    function showSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    }

    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    return (
        <nav>
            <ul className="sidebar mb-0">
                <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></a></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Expeierence</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
            <ul className='mb-0'>
                <li><Link to="/" className='navbar-Logo'><img src={LogoDark} style={{ height: "2.5rem" }} /> </Link></li>
                <li className="hideOnMobile"><Link to="/">Home</Link></li>
                <li className="hideOnMobile"><Link to="/about">About</Link></li>
                
                <li className="hideOnMobile"><Link to="/experience">Expeierence</Link></li>
                <li className="hideOnMobile"><Link to="/project">Projects</Link></li>
                <li className="hideOnMobile"><Link to="/education">Education</Link></li>
                <li className="hideOnMobile"><Link to="/resume">Resume</Link></li>
                <li className="hideOnMobile"><Link to="/contact">Contact Me</Link></li>
                <li className="menu-button" onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
            </ul>
        </nav>
    );
}

export default Navbar;