import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
//import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
	const { t } = useTranslation();
	const [isSuccessPopupOpen, setSuccessPopupOpen] = useState(false);
	const [isFailurePopupOpen, setFailurePopupOpen] = useState(false);
	// const navigate = useNavigate();
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
		repeatPassword: "",
	});

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

	const registerUser = async (e) => {
		e.preventDefault();
		const { name, email, phone, password, repeatPassword } = data;
		try {
			// const {data} = await axios.post("/member", {

			await axios.post("/member", {
				name,
				email,
				phone,
				password,
				repeatPassword,
			});

			if (data.error) {
				console.log("Error in data object " + data.error);
				handleFailure();
			} else {
				console.log("Registration sucessful");
				// navigate("/member")
				handleSuccess();
			}
		} catch (error) {
			console.log("Error in RegisterComponent: " + error);
			handleFailure();
		}
	};
	return (
		<>
			<div id="register-container">
				<h3>{t("become-member")}</h3>
				<form onSubmit={registerUser} action="" method="post">
					<div className="name-form">
						<label htmlFor="full-name-input">{t("full-name")}</label>
						<br></br>
						<input
							type="text"
							name="full-name-input"
							id="full-name-input"
							placeholder={t("example-full-name")}
							required
							value={data.name}
							onChange={(e) =>
								setData({ ...data, name: e.target.value })
							}></input>
					</div>
					<div className="email-form">
						<label htmlFor="email-input">{t("email")}</label>
						<br></br>
						<input
							type="email"
							name="email-input"
							id="email-input"
							placeholder={t("example-email")}
							required
							value={data.email}
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}></input>
					</div>
					<br></br>
					<div className="phone-form">
						<label htmlFor="phone-input">{t("phone")}</label>
						<br></br>
						<input
							type="number"
							name="phone-input"
							id="phone-input"
							placeholder={t("example-phone")}
							required
							value={data.phone}
							onChange={(e) =>
								setData({ ...data, phone: e.target.value })
							}></input>
					</div>
					<br></br>
					<div className="password-form">
						<label htmlFor="password-input">{t("password")}</label>
						<br></br>
						<input
							type="password"
							name="password-input"
							id="password-input"
							placeholder={t("password")}
							required
							value={data.password}
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}></input>
					</div>
					<div className="password-form">
						<label htmlFor="repeat-password-input">
							{t("confirm-password")}
						</label>
						<br></br>
						<input
							type="password"
							name="repeat-password-input"
							id="repeat-password-input"
							placeholder={t("confirm-password")}
							required
							value={data.repeatPassword}
							onChange={(e) =>
								setData({ ...data, repeatPassword: e.target.value })
							}></input>
					</div>
					<input
						className="submit-button"
						type="submit"
						value={t("become-member")}></input>
				</form>
			</div>

			{/* Success Popup */}
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
						<p>{t("member-success1")}</p>
						<p>{t("member-success2")}</p>
					</div>
				</div>
			)}

			{/* Failure Popup */}
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
						<p>{t("member-failure")}</p>
					</div>
				</div>
			)}
		</>
	);
}

// OLD CODE

// const fullNameValue = document.getElementById("full-name-input").value;
// const emailValue = document.getElementById("email-input").value;
// const passwordValue = document.getElementById("password-input").value;
// const repeatPasswordValue = document.getElementById(
// 	"repeat-password-input"
// ).value;

// function submitRegister(event) {
// 	event.preventDefault(); // Prevents the default form submission behavior

// 	if (passwordValue !== repeatPasswordValue) {
// 		alert("Passordene er ikke like");
// 	} else {
// 		//This is where you connect to the backend endpoint
// 		console.log("Firstname:", fullNameValue);
// 		console.log("Email:", emailValue);
// 		console.log("Password:", passwordValue);
// 		console.log("Repeat password:", repeatPasswordValue);
// 	}
// }
