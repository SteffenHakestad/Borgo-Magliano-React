import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function UploadComponent({ UploadDescription }) {
  const { t } = useTranslation();
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [headline, setHeadline] = useState("");
  const [newsText, setnewsText] = useState("");

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handlenewsTextChange = (e) => {
    setnewsText(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new FormData object and append the form values
    // Use 'headline', 'newsText', and 'selectedImage' states for the data
    const newsFormData = new FormData();
      newsFormData.append("headline", headline);
      newsFormData.append("newsText", newsText);
    
    // For now, console log the form data values
    console.log("News Form Data: ", newsFormData);


    // Reset form values and close the popup
    setHeadline("");
    setnewsText("");
    togglePopup();
  };

  return (
    <>
      <div className="upload-button-container">
        <button className="upload-button" onClick={togglePopup}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
        </button>
        <p>{t(UploadDescription)}</p>
      </div>

      {isPopupVisible && (
        <div className="news-popup">
          <form onSubmit={handleSubmit}>
            <div className="news-popup-content">
              <label htmlFor="news-headline">{t("headline")}</label>
              <input
                type="text"
                name="news-headline"
                id="news-headline"
                placeholder={t("headline")}
                value={headline}
                onChange={handleHeadlineChange}
              />
              <label htmlFor="news-text">{t("news-text")}</label>
              <textarea
                type="text"
                name="news-text"
                id="news-text"
                placeholder={t("news-text")}
                value={newsText}
                onChange={handlenewsTextChange}
              />
              <div className="popup-btn-container">
                <button className="popup-btn" onClick={togglePopup}>
                {t("cancel")}
                </button>
                <button type="submit" className="popup-btn">
                {t("publish")}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
