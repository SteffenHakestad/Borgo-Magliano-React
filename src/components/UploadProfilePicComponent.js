export default function UploadProfilePicComponent({PathToProfilePic}) {    
    return <>
    <div id="upload-profile-pic-container">
        <button type="" className="upload-profile-pic-btn">
            {/* Maybe Remove "process.env.PUBLIC_URL" when retrieving from DB */}
            <img src={process.env.PUBLIC_URL + PathToProfilePic} alt="Profile-Pic" />
            <img id="edit-profilepic-hover" src={process.env.PUBLIC_URL + "/assets/icons/EditProfilePic.png"} alt="Edit-Icon" />
        </button>
        <input id="file-input-button" type="file" name="file"></input>
    </div>
    </>
}

