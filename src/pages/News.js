import React, { useState } from 'react';
import NewsUploadComponent from '../components/NewsUploadComponent';
import NewsComponent from '../components/NewsComponent';
import { useTranslation } from 'react-i18next';



export default function News() {
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
            <div className="header">{t('news')}</div>
            {/* Component below should only be visible if you have an admin account. Normal account and not logged in users should not be able to see it */}
            {/* <NewsUploadComponent UploadDescription="" /> */}
            <NewsUploadComponent UploadDescription={t('news-upload')} />
            <NewsComponent
                NewsTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                // NewsDescription={"Lorem ipsum dolor sit amet, Duis at tristique purus, nec tincidunt purus. Suspendisse potenti. Aliquam sodales dolor at diam tempus viverra. Praesent non lacinia lectus. Curabitur placerat volutpat ipsum ac mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultrices lorem et tempor lobortis. "}
            />
            {/* Buttons below are temporary to trigger success and failure dialog boxes */}
            <div className='temp-btn-container'>
                <button onClick={handleSuccess} className='temp-button'>Submit news success<br></br>Temp. News.js</button>
                <button onClick={handleFailure} className='temp-button'>Submit news failure<br></br>Temp. News.js</button>
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
                        <p>Nyhetsinnlegg opplasting vellykket</p>
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
                        <p>Nyhetsinnlegg opplasting mislyktes</p>
                    </div>
                </div>
            )}
        </>
    );
}




// 
// This has to be reworked. I used localstorage to save the data, but it's not a solution that works with backend Db
// export default function News() {
//     const [newsData, setNewsData] = useState(() => {
//         // Load data from localStorage when the component is first mounted
//         const storedData = localStorage.getItem('newsData');
//         return storedData ? JSON.parse(storedData) : null;
//     });
//     const handleNewsSubmit = (headline, newsText) => {
//         // Update the state with the submitted data
//         const newData = { NewsTitle: headline, NewsDescription: newsText };
//         setNewsData(newData);
//         // Store data in localStorage for persistence
//         localStorage.setItem('newsData', JSON.stringify(newData));
//     };

//     useEffect(() => {
//         // Cleanup localStorage when the component is unmounted
//         return () => {
//             localStorage.removeItem('newsData');
//         };
//     }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount



// import NewsComponent from "../components/NewsComponent";
// import UploadComponent from "../components/UploadComponent";

// export default function News() {
//     return (
//         <>
//         <div className="header">Nyheter</div>
//         <UploadComponent UploadDescription="Her kan du skrive nyhetsinnlegg (admin only)" BtnFunc={() => console.log("hello")}/>
//         <NewsComponent NewsTitle={"headline user input text here"} NewsDescription={"News text user input here"}/>
//         </>
//     )
// }