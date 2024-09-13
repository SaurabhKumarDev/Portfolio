import React from 'react'

function Footer() {
    function applyHover(element) {
        element.target.style.backgroundColor = "white";
        element.target.style.color = "black";
    }
    function removeHover(element) {
        element.target.style.backgroundColor = "black";
        element.target.style.color = "white";
    }
    const date = new Date;
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between gap-2 align-items-center text-light bg-dark px-4 py-2' style={{ fontSize: "small" }}>
            <div>Designed and Developed By <strong>Saurabh Kumar</strong></div>
            <div>Copyright &copy; {date.getFullYear()} <strong>SK.</strong></div>
            <div className='d-flex gap-3 align-items-center'>
                <a href='https://github.com/saurabhkumardev' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-github" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "8px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                </a>
                <a href='https://www.linkedin.com/in/saurabhkumardev/' target='_blank' rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "8px 8px 6px 8px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                </a>
                <a href='mailto:saurrabhkumardev@gmail.com' target='_blank' rel="noreferrer">
                    <i className="fa-solid fa-envelope" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "7px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                </a>
            </div>
        </div>
    )
}

export default Footer