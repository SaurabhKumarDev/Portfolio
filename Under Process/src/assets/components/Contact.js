import React from 'react'
import FirstContact from '../image/contact/halfImage.jpg'
import SVMOne from '../image/contact/moneyShieldBlue.svg'
import SVMTwo from '../image/contact/downloadFileBlue.svg'
import SVMThree from '../image/contact/person_5StarsBlue.svg'

function Contact() {
    return (
        <div className='container my-5'>
            <div className='d-flex gap-3'>
                <div className='w-50'>
                    <h2 className='mb-5'>Questions about Uber for Business? We’re happy to help.</h2>
                    <img src={FirstContact} alt='contact' draggable='false' style={{ height:"auto" }} className='w-100' />
                </div>
                <div className='w-50 py-4 px-3' style={{ backgroundColor: "#e2dede" }}>
                    <hr style={{ height: "0.5rem", backgroundColor: "blue", color: "blue" }} className='w-100' />
                    <h3 className='pb-4'>Get In touch with us</h3>
                    <form>
                        <div className='w-100 d-flex gap-3'>
                            <div class="mb-3 w-50">
                                <label for="firstname" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstname" />
                            </div>
                            <div class="mb-3 w-50">
                                <label for="lastname" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastname" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone number</label>
                            <input type="tel" class="form-control" id="phone" />
                        </div>
                        <div class="mb-3">
                            <label for="address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="address" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-check-input w-100 p-2 rounded" style={{ height: "25vh" }} form="usrform" rows={40} cols={50} name="message">Enter text here...</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit &rarr;</button>
                    </form>
                    <small>By tapping Submit, you agree that you have read, understand, and agree to the Terms and Conditions and Privacy Policy, including that Uber and/or representatives may contact you for marketing purposes. You may opt out at any time.</small>
                    <div className='d-flex'>
                        <a href='#' className='' style={{paddingRight: "3px", borderRight:"2px solid black"}}>Terms and conditions</a>
                        <a href='#' style={{paddingLeft:"3px"}}>Opt out here</a>
                    </div>
                </div>
            </div>

            <div className='d-flex mt-5 mb-5 pt-5 gap-3'>
                <div>
                    <img draggable='false' src={SVMOne} className='mb-4' style={{ width: "4rem"}} />
                    <h4 className='mt-2 mb-4'>Keep budgets on track</h4>
                    <p className='my-3'>Save costs by setting policy controls around work-related meals and rides.</p>
                </div>
                <div>
                    <img draggable='false' src={SVMTwo} className='mb-4' style={{width:"4rem"}} />
                    <h4 className='mt-2 mb-4'>Automate expenses</h4>
                    <p className='my-3'>Set up monthly billing and automatically expense receipts for your employees’ meals and rides.</p>
                </div>
                <div>
                    <img draggable='false' src={SVMThree} className='mb-4' style={{width:"4rem"}} />
                    <h4 className='mt-2 mb-4'>Delight your customers</h4>
                    <p className='my-3'>Offer your clients food from the best restaurants in your city and courtesy rides to your events.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
