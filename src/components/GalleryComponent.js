export default function GalleryComponent({ProfileName, ProfilePicture, GalleryImagePath}) {
    return <>
            <div className="gallery-component-container">
                <div className="gallery-header-container">
                    <div className="gallery-profile-picture-frame">
                        <img className="gallery-profile-picture" src={process.env.PUBLIC_URL + ProfilePicture} alt="Profile" />
                    </div>
                    <div className="gallery-profile-name">{ProfileName}</div>
                </div>
                <div className="gallery-image-container">
                    <img className="gallery-image" src={process.env.PUBLIC_URL + GalleryImagePath} alt="Gallery-Post" />
                </div>
            </div>
        </>
}
