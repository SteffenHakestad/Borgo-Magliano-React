import React, { useState, useEffect } from "react";
import EventComponent from "../components/EventComponent";
import EventUploadComponent from "../components/EventUploadComponent";
import HeaderComponent from "../components/HeaderComponent";

import { useTranslation } from "react-i18next";

export default function Events() {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/event-posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<HeaderComponent HeaderName={"events"} />

			<div id="event-component-container">
				{/*EventUploadComponent should only be visible to admin users*/}
				<EventUploadComponent UploadDescription={t("events-upload")} />

				{/*Create a new EventComponent for every post*/}
				{posts.map((post) => (
					<EventComponent
						key={post._id}
						EventImagePath={post.eventImage}
						eventHeadline={post.eventHeadline}
						eventText={post.eventText}
					/>
				))}
			</div>
		</>
	);
}

// {/* Success Popup */}
// {isSuccessPopupOpen && (
// 	<div className="success-failure-popup-overlay">
// 		<div className="success-failure-container">
// 			<div
// 				className="close-success-failure-popup-btn-container"
// 				style={{ background: "#D3F2EA" }}>
// 				<button
// 					className="close-success-failure-popup-btn"
// 					onClick={handlePopupClose}>
// 					<img
// 						className="edit-img"
// 						src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
// 						alt="Exit-Icon"
// 					/>
// 				</button>
// 			</div>
// 			<p>{t("event-success")}</p>
// 		</div>
// 	</div>
// )}

// {/* Failure Popup */}
// {isFailurePopupOpen && (
// 	<div className="success-failure-popup-overlay">
// 		<div className="success-failure-container">
// 			<div
// 				className="close-success-failure-popup-btn-container"
// 				style={{ background: "#FFCFC2" }}>
// 				<button
// 					className="close-success-failure-popup-btn"
// 					onClick={handlePopupClose}>
// 					<img
// 						className="edit-img"
// 						src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
// 						alt="Exit-Icon"
// 					/>
// 				</button>
// 			</div>
// 			<p>{t("event-failure")}</p>
// 		</div>
// 	</div>
// )}
