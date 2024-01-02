import React, { useState } from 'react';
import BlogComponent from "../components/BlogComponent";
import BlogUploadComponent from "../components/BlogUploadComponent";
import { useTranslation } from 'react-i18next';


export default function Blog() {
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
        <div className="header">{t('blog')}</div>
        <BlogUploadComponent UploadDescription={t('blog-upload')}/>
        <BlogComponent ProfileName={"Ola Normann"} 
                        ProfilePicture={'/assets/images/TempProfilePic.png'} 
                        BlogText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie justo tortor, nec interdum orci rhoncus id. Nulla euismod nibh ac turpis ullamcorper dignissim. Etiam congue non enim quis aliquam. Cras elementum pulvinar euismod. Integer lorem metus, posuere nec pulvinar in, placerat nec orci. Cras ultrices, tortor vitae rutrum venenatis, dolor lectus mollis arcu, vel venenatis nulla augue a risus. Vivamus massa metus, maximus sit amet justo nec, rutrum efficitur augue. Suspendisse commodo lorem nec urna vehicula, in elementum justo tincidunt. Nullam mollis nisl neque, et molestie orci placerat ut."}
                        BlogImagePath={"/assets/images/Slide1.jpg"}/>
        <BlogComponent ProfileName={"Ola Normann"} 
                ProfilePicture={'/assets/images/TempProfilePic.png'} 
                BlogText={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare, eros et commodo semper, orci diam mollis felis, luctus aliquet eros velit eu leo. Aenean pellentesque nisl quis odio feugiat pellentesque. Mauris quis felis vitae lorem venenatis accumsan. Vivamus orci magna, mattis et posuere eu, tempor vitae turpis. Donec rutrum in lorem ac auctor. Aenean in mattis augue. Nullam fermentum ligula a lacinia interdum. Ut scelerisque et est a blandit. Maecenas vel ante massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam eget mi imperdiet, tristique neque a, consectetur nisl. Nulla commodo dapibus sem ac dapibus.Sed eu risus eu felis dictum pretium. Suspendisse vel lacus et leo iaculis condimentum. Quisque ut leo magna. Sed accumsan id tellus vel vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare vel urna vitae venenatis. Fusce varius tempus commodo. Nullam aliquam maximus tortor eget accumsan. Nulla ac interdum risus, imperdiet accumsan lectus. Cras dolor justo, rutrum sed enim in, mollis porta urna. Donec dapibus vulputate ante, vitae fringilla urna tincidunt et. Quisque dignissim eros nibh, vel bibendum est eleifend id. Mauris faucibus nec enim eu maximus. Praesent nec feugiat nulla. Duis semper in eros et imperdiet. Ut scelerisque turpis sit amet lectus molestie, eget pharetra tortor dictum. Pellentesque facilisis congue congue. Ut leo enim, imperdiet id commodo a, efficitur ut magna. Sed sit amet mauris nec nunc elementum lobortis. Phasellus quis mattis justo, quis porttitor diam. Nunc facilisis nunc nec ligula volutpat, eget tincidunt velit blandit. Praesent at sem eget sapien sollicitudin dapibus eu at velit. Pellentesque fermentum sollicitudin maximus. Ut tincidunt orci vitae justo vestibulum, nec mattis lacus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus."}
                BlogImagePath={"/assets/images/Slide3.jpg"}/>

        {/* Buttons below are temporary to trigger success and failure dialog boxes */}
        <div className='temp-btn-container'>
            <button onClick={handleSuccess} className='temp-button'>Submit blog success<br></br>Temp. Blog.js</button>
            <button onClick={handleFailure} className='temp-button'>Submit blog failure<br></br>Temp. Blog.js</button>
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
                    <p>Opplastning av blogg innlegg vellykket</p>
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
                    <p>Opplastning av blogg innlegg mislyktes</p>
                </div>
            </div>
        )}
        </>

    )
}


