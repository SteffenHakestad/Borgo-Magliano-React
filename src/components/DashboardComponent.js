export default function DashboardComponent({ProfilePicturePath, FullName, Email, PhoneNumber, Address}) {
    return <>
        <div className="dashboard-container">
            <button className="upload-profile-pic-btn">
                <img src={process.env.PUBLIC_URL + "/assets/icons/AnonProfilePic.png"} alt="ProfilePicture" />
            </button>
            <div className="dashboard-name-container">
                <p>{FullName}</p>
                <img src={process.env.PUBLIC_URL + "/assets/icons/ProfileIcon.png"} alt="Profile-Icon" />
                <input className="dashboard-edit-input" id="dashboard-edit-name" type="text" placeholder="Fullt navn" />
            </div>

        </div>
        </>
}
