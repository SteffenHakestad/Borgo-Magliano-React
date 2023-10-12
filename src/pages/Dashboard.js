import DashboardDisplayComponent from "../components/DashboardDisplayComponent"
import DashboardEditComponent from "../components/DashboardEditComponent"
export default function Dashboard() {
    return (
        <>
        <div className="header">Min Profil</div>
        <div className="dashboard-container">
            <button className="upload-profile-pic-btn">
                <img src={process.env.PUBLIC_URL + "/assets/icons/AnonProfilePic.png"} alt="ProfilePicture" />
            </button>
            <DashboardDisplayComponent
                            FullName={"Ola Normann"}
                            Email={"Mail@gmail.com"}
                            PhoneNumber={"00000000"}
                            Address={"Adresse 1"}/>
        
            <DashboardEditComponent
                            />
        </div>
        </>


    )
}