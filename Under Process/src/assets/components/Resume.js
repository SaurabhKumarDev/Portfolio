// import React from 'react'
// import CV from '../pdf/Resume.pdf'

// function Resume() {
//     return (
//         <div className='container my-5'>
//             <iframe class="w-100" style={{height:"auto"}} src={CV} width="800"></iframe>
//         </div>
//     )
// }

// export default Resume
import React from 'react'
import CV from '../pdf/Resume.pdf'

function Resume() {
    return (
        <div className='container my-5'>
            <iframe 
                src={`${CV}`} 
                width="100%" 
                style={{ border: 'none', height:"72vh" }} 
                className="embed-responsive-item"
            />
        </div>
    )
}

export default Resume
