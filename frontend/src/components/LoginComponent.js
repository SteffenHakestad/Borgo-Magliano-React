import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
	const { t } = useTranslation();
	const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
	const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: "",
		password: "",
	});

	// Handle successful login
	const handleSuccess = () => {
		setSuccessPopupOpen(true);
	};

	// Handle failed login
	const handleFailure = () => {
		setFailurePopupOpen(true);
	};

	// Close popup overlay
	const handlePopupClose = () => {
		setSuccessPopupOpen(false);
		setFailurePopupOpen(false);
	};

	const loginUser = async (e) => {
		e.preventDefault();
		const { email, password } = data;
		try {
			// const {data} = await axios.post("/member", {

			await axios.post("/member", {
				email,
				password,
			});

			if (data.error) {
				console.log("Error in data object " + data.error);
				handleFailure();
			} else {
				console.log("login sucessful");
				navigate("/dashboard");
				// handleSuccess();
			}
		} catch (error) {
			console.log("Error in LoginComponent: " + error);
			handleFailure();
		}
	};

	//Using li-prefix on id and name to avoid conflict with the register component
	return (
		<>
			<div id="login-container">
				<h3>{t("login")}</h3>
				<form onSubmit={loginUser}>
					{/* action="" method="post" */}
					<div className="email-form">
						<label htmlFor="li-email-input">{t("email")}</label>
						<br></br>
						<input
							type="email"
							name="li-email-input"
							id="li-email-input"
							placeholder={t("example-email")}
							value={data.email}
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}></input>
					</div>
					<br></br>
					<div className="password-form">
						<label htmlFor="li-password-input">{t("password")}</label>
						<br></br>
						<input
							type="password"
							name="li-password-input"
							id="li-password-input"
							placeholder={t("password")}
							vaule={data.password}
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}></input>
					</div>
					<input
						className="submit-button"
						type="submit"
						value={t("login")}></input>
				</form>
			</div>

			{/* Success Popup */}
			{/* {isSuccessPopupOpen && (
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
						<p>{t("member-success1")}</p>
						<p>{t("member-success2")}</p>
					</div>
				</div>
			)} */}

			{/* Failure Popup */}
			{/* {isFailurePopupOpen && (
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
						<p>{t("member-failure")}</p>
					</div>
				</div>
			)} */}
		</>
	);
}

// const LiEmailValue = document.getElementById("li-email-input").value;
// const LiPasswordValue = document.getElementById("li-password-input").value;

// function submitLogin(event) {
// 	event.preventDefault(); // Stop Page reload on submit.

// 	console.log("Email:", LiEmailValue);
// 	console.log("Password:", LiPasswordValue);
// }
