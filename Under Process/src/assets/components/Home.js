/*
  React: It is imported for JSX to work. While it's not strictly required in version 17+, it provides compatibility and clarity for versions below 17.
  useEffect: It is a hook that allows you to perform side effects in function components. It runs after the component renders.
  useRef: It is a hook that allows you to persist values across renders without causing a re-render. 
  Typed: Imported to create and control the typing animation.
*/
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import FirstImage from "../image/home/top.svg";
import Avatar from "../image/home/avatar.svg";
import Resume from "../pdf/Resume.pdf"

function Home() {
    // Create a ref to store the typed element
    const typedElementRef = useRef(null);

    useEffect(() => {
        // Options for the Typed.js instance
        const options = {
            strings: ['Fresher', 'Front-end Developer', 'Java Script', 'React JS', 'MERN Stack', 'Java Developer', 'Complex Problem Solver'],
            typeSpeed: 120,
            loop: true
        };

        // Instantiate Typed.js on the element with the provided options
        const typed = new Typed(typedElementRef.current, options);

        // Cleanup function to destroy Typed.js instance
        return () => {
            typed.destroy();
        };
    }, []);

    function applyHover(element) {
        element.target.style.backgroundColor = "black";
    }

    function removeHover(element) {
        const iconName = element.target.className;
        if (iconName === "fa-brands fa-github") {
            element.target.style.backgroundColor = "#333";
        } else if (iconName === "fa-brands fa-linkedin-in") {
            element.target.style.backgroundColor = "#0e76a8";
        } else if (iconName === "fa-solid fa-envelope") {
            element.target.style.backgroundColor = "#ea4335";
        } else if (iconName === "fa-brands fa-instagram") {
            element.target.style.backgroundColor = "#ea4335";
        }
    }

    return (
        <div style={{ backgroundColor: "#171c28" }}>
            <div className='d-flex justify-content-around align-items-center text-light' style={{ padding: "6rem 0" }}>
                <div className='w-50'>
                    <h1 className='mb-5' style={{ fontSize: "3rem" }}>Hi all, I am <span style={{ color: "black", backgroundColor: "#f0f0f0" }} className='rounded px-2'>Saurabh Kumar</span></h1>
                    <h4 className='mb-3'>A <span style={{ color: "rgb(114 57 174)" }} ref={typedElementRef}></span>;</h4>
                    <p className='fs-3 my-0 mb-3' style={{ opacity: "0.6" }}>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
                    <div className='d-flex gap-2 my-3 align-items-center'>
                        <div style={{ height: "50px", width: "50px" }}>
                            <a href='https://www.linkedin.com/in/saurabhkumardev/' target='_blank'>
                                <i className="fa-brands fa-linkedin-in" style={{ color: "white", fontSize: "large", padding: "12px 12px 10px 12px", background: "#0e76a8", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                            </a>
                        </div>
                        <div style={{ height: "50px", width: "50px" }}>
                            <a href='mailto:saurrabhkumardev@gmail.com' target='_blank'>
                                <i className="fa-solid fa-envelope" style={{ color: "white", fontSize: "large", padding: "10px", background: "#ea4335", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                            </a>
                        </div>
                        <div style={{ height: "50px", width: "50px" }}>
                            <a href='https://github.com/saurabhkumardev' target='_blank'>
                                <i className="fa-brands fa-github" style={{ color: "white", fontSize: "x-large", padding: "8px", background: "#333", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                            </a>
                        </div>
                        <div style={{ height: "50px", width: "50px" }}>
                            <a href='https://www.instagram.com/saurabhkumar_62/' target='_blank'>
                                <i className="fa-brands fa-instagram" style={{ color: "white", fontSize: "x-large", padding: "9px 11px", background: "#ea4335", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <Link to="/contact"><button className="py-2 px-3 rounded homeBtnHover">CONTACT ME</button></Link>
                        <a href={Resume} download><button className="py-2 px-3 rounded homeBtnHover">DOWNLOAD MY RESUME</button></a>
                        <a href="https://github.com/SaurabhKumarDev/Portfolio" target='_blank'><button className="py-2 px-3 rounded homeBtnHover"><span className='text-warning fs-5' style={{ lineHeight: "0", marginRight: "5px" }}>&#9733;</span>STAR ME ON GITHUB</button></a>
                    </div>
                </div>
                <div className="" style={{ width: "35%" }}>
                    <img src={FirstImage} className='' style={{ height: "100%", width: "80%", borderRadius: "40px" }} draggable='false' />
                </div>
            </div >

            <div className='container pb-3 d-flex justify-content-around align-items-center'>
                <div className='text-light fs-6 w-50'>
                    <h2 className='text-center mt-4 mb-5'>LET ME <span style={{ color: "blueviolet" }}>INTRODUCE</span> MYSELF</h2>
                    <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                    <p>I am fluent in classics like <span style={{ color: "blueviolet" }}>Javascript and Java.</span></p>
                    <p>My field of Interest's are building new  <span style={{ color: "blueviolet" }}>Web Technologies and Products</span> and also in areas related to <span style={{ color: "blueviolet" }}>Software Development</span>.</p>
                    <p>Whenever possible, I also apply my passion for developing products with <span style={{ color: "blueviolet" }}>Node.js</span> and Modern <span style={{ color: "blueviolet" }}>Javascript Library and Frameworks</span> like <span style={{ color: "blueviolet" }}>React.js and Node.js</span></p>
                </div>
                <div>
                    <img src={Avatar} draggable="false" style={{ height: "210px" }} />
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center flex-column text-light py-5'>
                <h1 className='fs-1' style={{ fontFamily: "math" }}>
                    <span className='text-info'>F</span><span className='text-success'>I</span>N<span className='text-danger'>D</span> M<span className='text-warning'>E</span> O<span className='text-info'>N</span>
                </h1>
                <p>Feel free to <Link to="/contact" style={{ textDecoration: "none" }}><span className='text-info'>Connect</span></Link> with me</p>
                <div className='d-flex gap-3 align-items-center'>
                    <a href='https://github.com/saurabhkumardev' target='_blank'>
                        <i className="fa-brands fa-github" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "8px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                    </a>
                    <a href='https://www.linkedin.com/in/saurabhkumardev/' target='_blank'>
                        <i className="fa-brands fa-linkedin-in" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "8px 8px 6px 8px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                    </a>
                    <a href='mailto:saurrabhkumardev@gmail.com' target='_blank'>
                        <i className="fa-solid fa-envelope" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "7px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                    </a>
                    <a href='https://www.instagram.com/saurabhkumar_62/' target='_blank'>
                        <i className="fa-brands fa-instagram" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "7px 9px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home