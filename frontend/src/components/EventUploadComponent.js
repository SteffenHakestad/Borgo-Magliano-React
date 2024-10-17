import React, { useState, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function UploadComponent({ UploadDescription }) {
	const { t } = useTranslation();
	const [isPopupVisible, setPopupVisibility] = useState(false);
	const [eventHeadline, setHeadline] = useState("");
	const [eventText, setEventText] = useState("");
	const [selectedImage, setSelectedImage] = useState(null);

	const togglePopup = () => {
		setPopupVisibility(!isPopupVisible);
	};

	//Ref for Image Preview
	const previewContainer = useRef(null);

	//State for image preview
	const [previewUrl, setPreviewUrl] = useState(null);

	//State for success/failure popup
	const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
	const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);

	const handleHeadlineChange = (e) => {
		setHeadline(e.target.value);
	};

	const handleEventTextChange = (e) => {
		setEventText(e.target.value);
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(file);

		if (file) {
			previewContainer.current.style.display = "block";
			const url = URL.createObjectURL(file);
			setPreviewUrl(url);
		}
	};

	const fileInputRef = useRef(null);
	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	//Function to remove seleceted image and hide the image preview
	const removeSelectedImage = () => {
		setSelectedImage(null);
		setPreviewUrl(null);
		previewContainer.current.style.display = "none";
	};

	// Submit to the API/Backend
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Create new FormData object and append the form values
		// Use 'headline', 'eventText', and 'selectedImage' states for the data
		const eventFormData = new FormData();
		eventFormData.append("eventHeadline", eventHeadline);
		eventFormData.append("eventText", eventText);
		eventFormData.append("image", selectedImage);

		try {
			const response = await axios.post("/api/event-posts", eventFormData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log("Post created:", response.data);

			handleSuccess();
		} catch (error) {
			console.error("There was an error creating the post!", error);
			handleFailure();
		}
	};

	//Trigger success/failure popup based on post status
	//Set all values to null/empty to reset the form

	const handleSuccess = () => {
		setSuccessPopupOpen(true);
		setHeadline("");
		setEventText("");
		setSelectedImage(null);
		previewContainer.current.style.display = "none";
	};
	const handleFailure = () => {
		setFailurePopupOpen(true);
	};

	// Close popup overlay
	const handlePopupClose = () => {
		setSuccessPopupOpen(false);
		setFailurePopupOpen(false);
		window.location.reload();
	};

	return (
		<>
			<div className="upload-button-container">
				<button className="upload-button std-btn" onClick={togglePopup}>
					<img
						src={process.env.PUBLIC_URL + "/assets/icons/UploadButton.png"}
						alt="Upload"
					/>
				</button>
				<p>{t(UploadDescription)}</p>
			</div>

			{isPopupVisible && (
				<div className="event-popup">
					<form onSubmit={handleSubmit}>
						<div className="event-popup-content">
							<label htmlFor="event-headline">{t("headline")}</label>
							<input
								type="text"
								name="event-headline"
								id="event-headline"
								placeholder={t("headline")}
								value={eventHeadline}
								onChange={handleHeadlineChange}
							/>
							<label htmlFor="event-text">{t("event-description")}</label>
							<textarea
								type="text"
								name="event-text"
								id="event-text"
								placeholder={t("event-description")}
								value={eventText}
								onChange={handleEventTextChange}
							/>
							<label htmlFor="event-image">{t("choose-image")}</label>
							{/*Hidden file upload button*/}

							<input
								type="file"
								accept="image/*"
								name="event-image"
								id="event-image"
								style={{ display: "none" }}
								ref={fileInputRef}
								onChange={handleImageChange}
							/>

							<div className="upload-image-btn-container">
								{/*Styled upload file button. Calls button above*/}
								<button
									className="upload-image-button std-btn"
									type="button"
									onClick={handleButtonClick}>
									<img
										alt="upload icon"
										src="/assets/icons/icon-upload-image.svg"></img>
								</button>

								<div
									className="preview-upload-image-container"
									ref={previewContainer}
									style={{ display: "none" }}>
									<button
										className="remove-image-button"
										type="button"
										onClick={removeSelectedImage}>
										<img
											src="/assets/icons/icon-x.svg"
											alt="remove-selected"></img>
									</button>
									{previewUrl && (
										<img
											src={previewUrl}
											className="preview-upload-image"
											alt="Preview"
										/>
									)}
								</div>
							</div>
							{/*Gets the file text from the type="file" button*/}
							<div className="selected-file-text">
								{selectedImage ? selectedImage.name : t("no-file-chosen")}
							</div>

							<div className="popup-btn-container">
								<button className="popup-btn std-btn" onClick={togglePopup}>
									{t("cancel")}
								</button>
								<button type="submit" className="popup-btn std-btn">
									{t("publish")}
								</button>
							</div>
						</div>
					</form>
				</div>
			)}

			{/* Media Post Success Popup */}
			{isSuccessPopupOpen && (
				<div
					className="success-failure-popup-overlay"
					onClick={handlePopupClose}>
					<div className="success-failure-container">
						<div
							className="close-success-failure-popup-btn-container"
							style={{ background: "#D3F2EA" }}>
							<button
								className="close-success-failure-popup-btn"
								onClick={handlePopupClose}>
								<img
									className="edit-img"
									src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("event-success")}</p>
					</div>
				</div>
			)}
			{/* Media Post Failure Popup */}
			{isFailurePopupOpen && (
				<div
					className="success-failure-popup-overlay"
					onClick={handlePopupClose}>
					<div className="success-failure-container">
						<div
							className="close-success-failure-popup-btn-container"
							style={{ background: "#FFCFC2" }}>
							<button
								className="close-success-failure-popup-btn"
								onClick={handlePopupClose}>
								<img
									className="edit-img"
									src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
									alt="Exit-Icon"
								/>
							</button>
						</div>
						<p>{t("event-failure")}</p>
					</div>
				</div>
			)}
		</>
	);
}
