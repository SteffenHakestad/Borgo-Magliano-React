import React, { useState } from "react";

export default function UploadComponent({ UploadDescription }) {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [headline, setHeadline] = useState("");
  const [blogText, setblogText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value);
  };

  const handleblogTextChange = (e) => {
    setblogText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (e) => {

    // Here you can perform the logic to post data to the database
    // Use 'headline', 'blogText', and 'selectedImage' states for the data

    // For example:
    console.log("Posting data to the database:", { headline, blogText, selectedImage });

    // Reset form values and close the popup
    setHeadline("");
    setblogText("");
    setSelectedImage(null);
    togglePopup();
  };

  return (
    <>
      <div className="upload-button-container">
        <button className="upload-button" onClick={togglePopup}>
          <img src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"} alt="Upload" />
        </button>
        <p>{UploadDescription}</p>
      </div>

      {isPopupVisible && (
        <div className="blog-popup">
          <form onSubmit={handleSubmit}>
            <div className="blog-popup-content">
              <label htmlFor="blog-headline">Overskrift</label>
              <input
                type="text"
                name="blog-headline"
                id="blog-headline"
                placeholder="Overskrift"
                value={headline}
                onChange={handleHeadlineChange}
              />
              <label htmlFor="blog-text">Blogg innlegg</label>
              <textarea
                type="text"
                name="blog-text"
                id="blog-text"
                placeholder="Blogg innlegg"
                value={blogText}
                onChange={handleblogTextChange}
              />
              <label htmlFor="blog-image">Velg bilde</label>
              <input
                type="file"
                accept="image/*"
                name="blog-image"
                id="blog-image"
                onChange={handleImageChange}
              />
              <div className="popup-btn-container">
                <button className="popup-btn" onClick={togglePopup}>
                  Avbryt
                </button>
                <button type="submit" className="popup-btn">
                  Publiser
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
