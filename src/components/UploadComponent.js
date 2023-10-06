import React, { useState } from 'react';
import NewsUploadComponent from './NewsUploadComponent';

export default function UploadComponent({ UploadDescription, onNewsSubmit }) {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const handleSubmit = (headline, newsText) => {
        // Handle form submission logic here
        //console.log('Submitted Headline:', headline);
        //console.log('Submitted News Text:', newsText);
        // Pass the submitted data to the parent component for processing
        onNewsSubmit(headline, newsText);
        // Close the popup after submission
        handleClosePopup();
    };

    return (
        <>
            <div className="upload-button-container">
                <button className="upload-button" onClick={handleOpenPopup}>
                    <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
                </button>
                <p>{UploadDescription}</p>
                {isPopupVisible && <NewsUploadComponent onSubmit={handleSubmit} onClose={handleClosePopup} />}
            </div>

        </>
    );
}

// export default function UploadComponent({UploadDescription, BtnFunc}) {
//     return <>
//         <div className="upload-container">
//             <p>{UploadDescription}</p>
//             <button onClick={BtnFunc}>
//                 <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
//             </button>
//         </div>
//         </>
// }
