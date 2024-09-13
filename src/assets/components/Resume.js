import React from 'react'
import CV from '../pdf/Resume.pdf'

function Resume() {
    return (
        <div className='container my-5'>
            <iframe 
                src={`${CV}`} 
                width="100%" 
                style={{ border: 'none', height:"80vh" }} 
                className="embed-responsive-item"
            />
        </div>
    )
}

export default Resume