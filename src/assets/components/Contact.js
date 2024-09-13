import React, { useState } from 'react'

function Contact() {
    const [emailData, setEmailData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmailData(prevState => ({ ...prevState, [name]: value }));
    };

    function applyHover(element) {
        element.target.style.backgroundColor = "white";
        element.target.style.color = "black";
    }
    function removeHover(element) {
        element.target.style.backgroundColor = "black";
        element.target.style.color = "white";
    }
    console.log(process.env.CONTACT_API)
    return (
        <div className="text-light container pt-3 pb-3">
            <div>
                <div className='text-center mt-3 mb-5'>
                    <h1 className='fw-bold '>Get in Touch</h1>
                    <h5 className=''>Reach out on <a href='https://linkedin.com/in/saurabhkumardev' target='_blank' style={{ textDecoration: "none" }} className='text-info'>LinkedIn</a> for a quicker response!</h5>
                </div>
                <form className='rounded shadow-lg p-4' action="https://api.web3forms.com/submit" method='post' target='_blank' autocomplete="on" style={{ backgroundColor: "#19197073", boxShadow: "rgb(138 165 93) 0px 0px 20px 0px" }} >
                    {/* Replace with your Access Key */}
                    <input type="hidden" name="access_key" value={process.env.CONTACT_API} />
                    <div className='row mb-2s'>
                        <div className="col-md-6 mb-3">
                            <label className='form-label' for='firstName'>First Name</label>
                            <input
                                className='form-control p-3'
                                id='firstName'
                                name="firstName"
                                type='text'
                                required
                                placeholder="Please enter first name..."
                                value={emailData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='form-label' for="lastName">Last Name</label>
                            <input
                                type='text'
                                className='form-control p-3'
                                id="lastName"
                                name="lastName"
                                required
                                placeholder="Please enter last name..."
                                value={emailData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className="col-md-6 mb-3">
                            <label className='form-label' for="email">Email</label>
                            <input
                                className='form-control p-3'
                                id="email"
                                name="email"
                                placeholder="Please enter email..."
                                type="email"
                                required
                                value={emailData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className='form-label' for="phone">Phone Number</label>
                            <input
                                className='form-control p-3'
                                id="phone"
                                name="phone"
                                type='tel'
                                required
                                placeholder="Please enter phone number..."
                                value={emailData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className='form-label' for="subject">Subject</label>
                        <input
                            className='form-control p-3'
                            id="subject"
                            minLength={3}
                            required
                            name="subject"
                            placeholder="Please enter subject..."
                            value={emailData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='form-label' for="message">What Do You Have in Mind?</label>
                        <textarea
                            className='form-control p-3'
                            style={{ height: "20vh" }}
                            id="message"
                            name="message"
                            minLength={15}
                            required
                            placeholder="Please enter your message..."
                            value={emailData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary py-3 rounded w-100 me-3 my-3" type="submit">Submit</button>

                    </div>

                    <div className='d-flex gap-3 justify-content-end pt-2 align-items-center'>
                        <a href='https://www.linkedin.com/in/saurabhkumardev/' target='_blank' rel="noreferrer">
                            <i className="fa-brands fa-linkedin-in" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "8px 8px 6px 8px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                        </a>
                        <a href='mailto:saurrabhkumardev@gmail.com' target='_blank' rel="noreferrer">
                            <i className="fa-solid fa-envelope" style={{ color: "white", cursor: "pointer", fontSize: "small", padding: "7px", background: "black", borderRadius: "50%" }} onMouseOver={applyHover} onMouseOut={removeHover}></i>
                        </a>
                    </div>
                </form>
                {/* <Link to="/" className="btn btn-secondary py-2 px-4 mt-3" type="button" style={{ position: "", bottom: "20px", left: "20px", textDecoration: "none", color: "white" }}>
                    Go Back
                </Link> */}
            </div>
        </div>
    )
}

export default Contact
