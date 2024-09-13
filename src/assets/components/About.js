import React from 'react'
import Photo from '../image/About/Passport Photo Saurabh.jpg';
import Express from '../image/About/Express.png'
import VisualStudio from '../image/About/vs code.png'

function About() {
    return (
        <div className='text-light'>
            <div className='container d-flex flex-column flex-md-row justify-content-around align-items-center pt-2 pb-5 py-md-5'>
                <div className='w-100 w-md-50 mb-4 mb-md-0'>
                    <div className='d-flex justify-content-center'>
                        <h2 className='text-center mt-3 mt-md-5 mb-4 aboutHeading' style={{ fontFamily: "Sedan SC, serif", fontWeight: "400", fontStyle: "normal" }}>
                            Know Who <span style={{ color: "#8f4ccc" }}>I'm</span>
                        </h2>
                    </div>
                    <p>Hi Everyone, I am <span style={{ color: "#8f4ccc" }}>Saurabh Kumar</span> from <span style={{ color: "#8f4ccc" }}>Delhi, India.</span></p>
                    <p><span style={{ color: "#8f4ccc" }}>Full stack software developer</span> with expertise in front-end and back-end development, experienced in leading cross-functional terms.</p>
                    {/* <p>I love simplifying complex problems into user-friendly designs. My skills in problem-solving and <span style={{ color: "#8f4ccc" }}>coding</span> help me create efficient, intuitive solutions.</p> */}
                    <p className='mb-3'>Completed <span style={{ color: "#8f4ccc" }}>B.Tech.</span> in <span style={{ color: "#8f4ccc" }}>Computer Science & Engineering</span> at ADGITM, affiliated with GGSIPU, with an impressive percentage of <span style={{ color: "#8f4ccc" }}>82.20%</span>.</p>
                    <p className='mb-1'>Apart from coding, some other activities that I love to do!</p>
                    <ul style={{ listStyleImage: "url('../images/About/list Style image.svg')" }}>
                        <li>Travelling</li>
                        <li>Watching movies and series</li>
                    </ul>
                    <p>I am eager to apply my skills in a professional setting and contribute to innovative projects that make a positive impact.</p>
                    <p><span style={{ color: "#8f4ccc", fontWeight: "700" }}>Thank you</span> for taking the time to review my portfolio.</p>
                </div>
                <div className='w-50 w-md-25 text-center    '>
                    <img src={Photo} draggable="false" style={{ width: "70%", padding: "5px", border: "2px solid white", borderRadius: "50%" }} />
                </div>
            </div>

            <div>
                <div className='d-flex justify-content-center'>
                    <h2 className='text-center mt-5 mb-4 aboutHeading' style={{ fontFamily: "Sedan SC, serif", fontWeight: "400", fontStyle: "normal" }}>
                        <span style={{ color: "#8f4ccc" }}>S</span>kill<span style={{ color: "#8f4ccc" }}>s</span>et
                    </h2>
                </div>
                <div className='container d-flex flex-wrap gap-5 justify-content-center pt-4 pb-5'>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-html5 text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-css3 text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-bootstrap text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <img src={Express} />
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-solid fa-database text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-solid fa-leaf"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-php"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-node-js text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-react text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-node text-light"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-java text-light"></i>
                    </div>
                </div>

                <h2 className='text-center mt-5 mb-4' style={{ fontFamily: "Sedan SC, serif", fontWeight: "400", fontStyle: "normal" }}>
                    <span style={{ color: "#8f4ccc" }}>T</span>oo<span style={{ color: "#8f4ccc" }}>l</span>s <span style={{ color: "#8f4ccc" }}>I</span> u<span style={{ color: "#8f4ccc" }}>s</span>e
                </h2>
                <div className='container d-flex flex-wrap gap-5 justify-content-center pt-4 pb-5'>
                    <div className='aboutLargeIcons'>
                        <i className="fa-brands fa-windows"></i>
                    </div>
                    <div className='aboutLargeIcons'>
                        <img src={VisualStudio} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About