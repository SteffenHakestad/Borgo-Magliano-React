import React, { useState } from "react";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../components/HeaderComponent";

export default function Member() {
	const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
	const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);
	const { t } = useTranslation();

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
		<div>
			<HeaderComponent HeaderName={"login-register"} />

			<div id="login-register-container">
				<LoginComponent />
				<RegisterComponent />
			</div>

			{/* Buttons below are temporary to trigger success and failure dialog boxes */}
			<div className="temp-btn-container">
				<button onClick={handleSuccess} className="temp-button">
					Submit login/reg success<br></br>Temp. Member.js
				</button>
				<button onClick={handleFailure} className="temp-button">
					Submit login/reg failure<br></br>Temp. Member.js
				</button>
			</div>

			{/* Success Popup */}
			{isSuccessPopupOpen && (
				<div className="success-failure-popup-overlay">
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
						<p>{t("member-success1")}</p>
						<p>{t("member-success2")}</p>
					</div>
				</div>
			)}

			{/* Failure Popup */}
			{isFailurePopupOpen && (
				<div className="success-failure-popup-overlay">
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
						<p>{t("member-failure")}</p>
					</div>
				</div>
			)}
		</div>
	);
}
