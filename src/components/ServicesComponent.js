import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function ServicesComponent() {
    const serviceClick = (btn) => {
        console.log("Button clicked: " + btn);
    }


    return (
        <>
        <div id="services-outer-container">
            <div className='h-services-divider'></div>
                <div id="services-container">
                
                <div className='services-btn-container'>
                    <Link to="/home">
                    <button className='services-btn' onClick={() => serviceClick("Course")}>
                        <img alt="course icon" src='\assets\icons\icon-course.svg'></img>
                    </button>
                    
                    <h1 id="thiscausesskew" >Kurs</h1>
                    </Link>
                </div>
                

                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <button className='services-btn' onClick={() => serviceClick("Diet")}>
                        <img alt="diet icon" src='\assets\icons\icon-diet.svg'></img>
                    </button>
                    <h1 id="thiscausesskew" >Kostveiledning</h1>
                </div>

                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <button className='services-btn' onClick={() => serviceClick("Presentation")}>
                        <img alt="diet icon" src='\assets\icons\icon-presentation.svg'></img>
                    </button>
                    <h1 id="thiscausesskew" >Foredrag</h1>
                </div>

                <div className='v-services-divider'></div>

                <div className='services-btn-container'>
                    <button className='services-btn' onClick={() => serviceClick("Consultant")}>
                        <img alt="diet icon" src='\assets\icons\icon-consultant.svg'></img>
                    </button>
                    <h1 id="thiscausesskew">Konsulenttjenseter</h1>
                </div>

            </div>
            <div className='h-services-divider'></div>
        </div>

        </>

    );
}




