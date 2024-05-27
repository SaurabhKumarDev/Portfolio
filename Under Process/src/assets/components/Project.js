import React, { useEffect } from 'react'
import Image from '../image/project/image.png'

function Project() {
    useEffect(()=>{
        document.getElementsByClassName("absolutedPortion")[0].style.display = "none";
    })
    function menuBtn() {
        document.getElementsByClassName("project-card")[0].style.display = "none";
        document.getElementsByClassName("absolutedPortion")[0].style.display = "block";
    }
    function closeBtn() {
        document.getElementsByClassName("project-card")[0].style.display = "block";
        document.getElementsByClassName("absolutedPortion")[0].style.display = "none";
    }

    return (
        <div className='container my-5'>
            <div className=''>
                <div style={{ position: "relative" }} >
                    <div className='h-25 w-25 project-card'>
                        <div>
                            <img src={Image} style={{ height: "15rem", width: "-webkit-fill-available", borderRadius: "10px 10px 0px 0px" }} />
                        </div>
                        <div className='py-2 px-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h4 className='text-info' title='Title'>Title of the project</h4>
                                <i class="fa-solid fa-ellipsis-vertical text-light pb-2" onClick={menuBtn}>sk</i>
                            </div>
                            <p style={{ color: "lightcyan", fontSize: "0.8rem" }} title='About'>Description about the project using the github about description</p>
                        </div>
                    </div>
                    <div className="w-25 text-light bg-dark absolutedPortion" style={{ position: "absolute", top: "0" }}>
                        <div className='rounded'>
                            <div style={{ position: "relative", borderBottom: "1px solid white" }}>
                                <ul>
                                    <li>Parent scope information is also used for theming.</li>
                                    <li>Parent scope information is also used for theming.</li>
                                    <li>Parent scope information is also used for theming.</li>
                                    <li>Parent scope information is also used for theming.</li>
                                    <li>Parent scope information is also used for theming.</li>
                                </ul>
                                <i class="fa-solid fa-xmark text-light m-2 py-1 px-2 bg-primary" style={{ position: "absolute", top: "0", right: "0", borderRadius: "50%" }} onClick={closeBtn}></i>
                            </div>
                            <div className='d-flex gap-3 align-items-center justify-content-left m-3'>
                                <i class="fa-brands fa-github p-2 bg-light text-dark fs-3" style={{ borderRadius: "50%" }}></i>
                                <i class="fas fa-share p-2 bg-light text-dark fs-3" style={{ borderRadius: "50%" }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
