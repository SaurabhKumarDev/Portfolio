import React from 'react'
import { expreienceData } from "../json/Experince"

function Experience() {
    return (
        <div className="container text-light py-2 mb-4">
            <h2 className="my-5 aboutHeading experience-title">
                <span className="highlight">E</span>xp<span className="highlight">e</span>ri<span className="highlight">e</span>nc<span className="highlight">e</span>
            </h2>

            <div className="d-flex flex-column gap-5">
                {expreienceData.map((item, index) => {
                    return <div className="experience-container">
                        <div className="experience-header p-3">
                            <div className='d-flex justify-content-between mb-2'>
                                <h3>{item.title}</h3>
                                <h5 className='company-name'><a href={item.company.url} target='_blank' rel="noreferrer" className='text-light' style={{ textDecoration: "none" }}>{item.company.name}</a></h5>
                            </div>
                            {item.projectName ? <h5 className='mb-2'>{item.projectName}</h5> : ""}
                            <p>{item.period}</p>
                        </div>
                        <ul className="experience-details py-3 my-0">
                            {item.details ? item.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            )) : ""}
                            {item.tech ? <li><strong>Tech Used : </strong>{item.tech}</li> : ""}
                        </ul>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Experience