import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import DashboardDisplayComponent from "../components/DashboardDisplayComponent";
import DashboardEditComponent from "../components/DashboardEditComponent";
import HeaderComponent from "../components/HeaderComponent";
import { UserContext } from "../context/UserContext";

export default function Dashboard() {
	const { t } = useTranslation();

	const [isEditing, setIsEditing] = useState(false);
	const { user } = useContext(UserContext);

	const handleEditClick = () => {
		setIsEditing(!isEditing);
	};

	return (
		<>
			<HeaderComponent HeaderName={"my-profile"} />
			{user ? (
				<div className="dashboard-container">
					{/* Checks if the user clicked the edit button/stop editing button. Display the correct component based on the result. */}
					{isEditing ? (
						<DashboardEditComponent
							onExitEdit={handleEditClick}
							PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
						/>
					) : (
						<DashboardDisplayComponent
							FullName={user.name}
							Email={user.email}
							PhoneNumber={user.phone}
							Address={"Get from DB"}
							onEditClick={handleEditClick}
							PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
						/>
					)}
				</div>
			) : (
				<div id="not-logged-in-container">
					<h1>You are not logged in. </h1>
					<Link to="/member">
						<btn className="std-btn">{t("click-to-log-in")}</btn>
					</Link>
				</div>
			)}
		</>
	);
}

// <div className="dashboard-container">
// 	{/* Checks if the user clicked the edit button/stop editing button. Display the correct component based on the result. */}
// 	{isEditing ? (
// 		<DashboardEditComponent
// 			onExitEdit={handleEditClick}
// 			PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
// 		/>
// 	) : (
// 		<DashboardDisplayComponent
// 			FullName={user.name}
// 			Email={user.email}
// 			PhoneNumber={user.phone}
// 			Address={"Get from DB"}
// 			onEditClick={handleEditClick}
// 			PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
// 		/>
// 	)}
// </div>
