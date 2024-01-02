import React, { useState } from 'react';
import GalleryComponent from "../components/GalleryComponent";
import GalleryUploadComponent from "../components/GalleryUploadComponent";
import { useTranslation } from 'react-i18next';



export default function Gallery() {
    const { t } = useTranslation();
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
        <div className="header">{t('gallery')}</div>
        <GalleryUploadComponent UploadDescription={t('gallery-upload')}/>
        <div className="gallery-container">
            <GalleryComponent ProfileName={"Ola Normann"}
                                ProfilePicture={'/assets/images/TempProfilePic.png'}
                                GalleryImagePath={"/assets/images/Slide1.jpg"}
                                                        />
            <GalleryComponent ProfileName={"Ola Normann"}
                        ProfilePicture={'/assets/images/TempProfilePic.png'}
                        GalleryImagePath={"/assets/images/Slide2.jpg"}
                                                />
            <GalleryComponent ProfileName={"Ola Normann"}
            ProfilePicture={'/assets/images/TempProfilePic.png'}
            GalleryImagePath={"/assets/images/Slide2.jpg"}
                                    />
        </div>
        {/* Buttons below are temporary to trigger success and failure dialog boxes */}
        <div className='temp-btn-container'>
            <button onClick={handleSuccess} className='temp-button'>Submit gallery success<br></br>Temp. Gallery.js</button>
            <button onClick={handleFailure} className='temp-button'>Submit gallery failure<br></br>Temp. Gallery.js</button>
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
                    <p>Bilde opplasting til galleri vellykket</p>
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
                    <p>Bilde opplasting til galleri mislyktes</p>
                </div>
            </div>
        )}
        </>


    )
}