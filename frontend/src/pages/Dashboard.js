import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";

import DashboardDisplayComponent from "../components/DashboardDisplayComponent";
import DashboardEditComponent from "../components/DashboardEditComponent";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
	const { t } = useTranslation();
	const { user, setUser } = useContext(UserContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = async () => {
		if (isEditing) {
			// Fetch the latest user data when exiting the edit mode
			try {
				const response = await axios.get("/profile");
				setUser(response.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		}
		setIsEditing(!isEditing);
	};

	// Fetch the latest user data when the component mounts
	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get("/profile");
				setUser(response.data);
				//console.log("User data:", response.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, [setUser]);

	const handleLogoutPopup = (e) => {
		if (e === "close") {
			console.log("close logout popup");
		} else if (e === "open") {
			console.log("open logout popup");
		} else {
			console.log("no idea why this fired");
		}
	};

	//Log out function
	const handleLogOut = async () => {
		try {
			await axios.post("/logout");
			setUser(null);
		} catch (error) {
			console.error("Error logging out: ", error);
		}
	};

	return (
		<>
			<HeaderComponent HeaderName={"my-profile"} />
			{/*Checks if user is logged in, if so display dashboard components. If not tell user to log in */}
			{user ? (
				<div className="dashboard-container">
					{/* Checks if the user clicked the edit button/stop editing button. Display the correct component based on the result. */}
					{isEditing ? (
						<DashboardEditComponent
							onExitEdit={handleEditClick}
							PathToProfilePic={
								user.profilePic || "/assets/icons/AnonProfilePicture.png"
							}
						/>
					) : (
						<DashboardDisplayComponent
							FullName={user.name}
							Email={user.email}
							PhoneNumber={user.phone}
							Address={user.address}
							onEditClick={handleEditClick}
							PathToProfilePic={
								user.profilePic || "/assets/icons/AnonProfilePicture.png"
							}
						/>
					)}
					<button className="std-btn" onClick={handleLogoutPopup("open")}>
						Log out(T)
					</button>
					<div className="logout-container">
						<h1>Are you sure you want to log out (T)</h1>
						<button className="logout-btn std-btn" onClick={handleLogOut}>
							Log out(T)
						</button>
						<button className="std-btn" onClick={handleLogoutPopup("close")}>
							No(T)
						</button>
					</div>
				</div>
			) : (
				<div id="not-logged-in-container">
					<h1>You are not logged in. </h1>
					<Link to="/member">
						<button className="std-btn">{t("click-to-log-in")}</button>
					</Link>
				</div>
			)}
		</>
	);
}
