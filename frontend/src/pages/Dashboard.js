import React, { useState } from "react";
import DashboardDisplayComponent from "../components/DashboardDisplayComponent";
import DashboardEditComponent from "../components/DashboardEditComponent";
import HeaderComponent from "../components/HeaderComponent";

export default function Dashboard() {
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(!isEditing);
	};

	return (
		<>
			<HeaderComponent HeaderName={"my-profile"} />

			<div className="dashboard-container">
				{/* Checks if the user clicked the edit button/stop editing button. Display the correct component based on the result. */}
				{isEditing ? (
					<DashboardEditComponent
						onExitEdit={handleEditClick}
						PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
					/>
				) : (
					<DashboardDisplayComponent
						FullName={"Get from DB"}
						Email={"Get from DB"}
						PhoneNumber={"Get from DB"}
						Address={"Get from DB"}
						onEditClick={handleEditClick}
						PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}
					/>
				)}
			</div>
		</>
	);
}

//OLD CODE, Keep for now, import and add component to document flow
//import UploadProfilePicComponent from "../components/UploadProfilePicComponent";
//<UploadProfilePicComponent PathToProfilePic={"/assets/icons/AnonProfilePicture.png"}/>
