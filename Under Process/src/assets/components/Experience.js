import React from 'react'

function Experience() {
    return (
        <div className='container text-light py-2'>
            <h2 className='mt-5 mb-4' style={{ fontFamily: "Sedan SC, serif", fontWeight: "400", fontStyle: "normal" }}>
                <span style={{ color: "#8f4ccc" }}>E</span>xp<span style={{ color: "#8f4ccc" }}>e</span>ri<span style={{ color: "#8f4ccc" }}>e</span>nc<span style={{ color: "#8f4ccc" }}>e</span>
            </h2>

            <div className='d-flex flex-column gap-5'>
                <div className='experienceShadow'>
                    <div className='experienceGradient p-3'>
                        <h3>Java Developer at CodSoft</h3>
                        <p>July 2023 - Aug 2023</p>
                    </div>
                    <ul style={{ border: "1px solid white", borderTop: "0" }} className='py-3'>
                        <li>Developed and maintained web applications using Java, JDBC, Netbeans, and Java Swings</li>
                        <li>Implemented algorithms and data structures to optimise performance and functionality</li>
                        <li><strong>Tech Used</strong> - Java | JDBC | Netbeans | Algorithm | Java Swings</li>
                    </ul>
                </div>

                <div>
                    <h3>AI Developer at IBM</h3>
                    <p></p>
                </div>

                <div className='p-2 rounded' style={{ border: "2px solid white" }} >
                    <h3>Web Developer at Logix Firm</h3>
                    <p>Jan 2021 - Apr 2021</p>
                    <ul>
                        <li>Tested and debugged web applications for functionality and performance</li>
                        <li>Collaborated with clients and stakeholders to ensure quality and satisfaction</li>
                        <li>Tech Used - HTML | CSS | PHP | MySQL | JavaScript | PhpMyAdmin</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
