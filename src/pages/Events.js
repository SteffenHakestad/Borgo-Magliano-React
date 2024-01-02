import React, { useState } from 'react';
import EventComponent from "../components/EventComponent"
import EventUploadComponent from "../components/EventUploadComponent";

export default function Events() {
    const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
    const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);

    // Handle successful registration
    const handleSuccess = () => {
        setSuccessPopupOpen(true);
    };

    // Handle failed registration
    const handleFailure = () => {
        setFailurePopupOpen(true);
    };

    // Close popup overlay
    const handlePopupClose = () => {
        setSuccessPopupOpen(false);
        setFailurePopupOpen(false);
    };

    return (
        <>
        <div className="header">Eventer</div>
        <div id="event-component-container">
            {/*EventUploadComponent should only be visible to admin users*/}
            <EventUploadComponent UploadDescription="Her kan du skrive event-innlegg (admin only)"/>
            <EventComponent EventTitle={"Grillkveld"} EventDescription={"Etiam viverra pretium sapien, at vehicula augue consequat at. Proin turpis tellus, volutpat in tristique vel, consequat eu ante. Aliquam at felis nulla. Donec id diam quis justo lobortis sodales. Aliquam maximus gravida mattis. Praesent nibh erat, commodo vitae tincidunt eget, ultrices sit amet justo. Phasellus id elementum orci. Pellentesque in mattis sem. "} EventImagePath={'/assets/images/EventTemp.png'}/>
            <EventComponent EventTitle={"Bursdagsfest"} EventDescription={"Nam cursus nunc sit amet sem semper iaculis. Phasellus egestas odio vitae augue mollis, ut consequat dolor interdum. Sed eu placerat tellus. Duis scelerisque eu est eu finibus. Quisque fermentum, augue eu dignissim euismod, ante turpis rhoncus arcu, non tincidunt neque nulla eu tortor. Sed congue justo gravida, pretium elit in, consectetur turpis. Vivamus vel nisi nec libero malesuada aliquam. Etiam non neque at quam congue pulvinar. Donec hendrerit porttitor nisi, lobortis gravida libero suscipit ac. "} EventImagePath={'/assets/images/EventTemp1.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
            <EventComponent EventTitle={"Gåtur"} EventDescription={"Nullam bibendum nibh et nisl dictum consectetur. Nullam vel nisl vestibulum, accumsan mauris quis, ornare enim. Pellentesque interdum vestibulum tristique. Ut eu lobortis ex. Praesent fermentum, nisi et suscipit dapibus, ante augue ultrices libero, ac tristique neque justo vitae mi."} EventImagePath={'/assets/images/EventTemp2.png'}/>
        </div>

        {/* Buttons below are temporary to trigger success and failure dialog boxes */}
        <div className='temp-btn-container'>
            <button onClick={handleSuccess} className='temp-button'>Submit event success<br></br>Temp. Event.js</button>
            <button onClick={handleFailure} className='temp-button'>Submit event failure<br></br>Temp. Event.js</button>
        </div>


        {/* Success Popup */}
        {isSuccessPopupOpen && (
            <div className="success-failure-popup-overlay">
                <div className="success-failure-container">
                    <div className='close-success-failure-popup-btn-container' style={{background: "#D3F2EA"}}>
                        <button className="close-success-failure-popup-btn" onClick={handlePopupClose}>
                            <img className="edit-img" src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"} alt="Exit-Icon" />
                        </button>
                    </div>
                    <p>Event opplasting vellykket</p>
                </div>
            </div>
        )}

        {/* Failure Popup */}
        {isFailurePopupOpen && (
            <div className="success-failure-popup-overlay">
                <div className="success-failure-container">
                    <div className='close-success-failure-popup-btn-container' style={{background: "#FFCFC2"}}>
                        <button className="close-success-failure-popup-btn" onClick={handlePopupClose}>
                            <img className="edit-img" src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"} alt="Exit-Icon" />
                        </button>
                    </div>
                    <p>Event opplasting mislyktes</p>
                </div>
            </div>
        )}

        </>


    )
}