export default function BlogComponent({ProfileName, ProfilePicture, BlogText, BlogImagePath1, BlogImagePath2}) {
    return <>
            <div className="blog-container">
                <div className="blog-header-container">
                    <div className="profile-picture-frame">
                        <img className="blog-profile-picture" src={process.env.PUBLIC_URL + ProfilePicture} alt="Profile" />
                    </div>
                    <div className="blog-profile-name">{ProfileName}</div>
                </div>
                <div className="event-divider"></div>
                <p className="blog-text">{BlogText}</p>
                <div className="blog-image-outer-container">
                    <div className="blog-image-container">
                        <img className="blog-image" src={process.env.PUBLIC_URL + BlogImagePath1} alt="Blog-1" />
                    </div>
                    <div className="blog-image-container">
                        <img className="blog-image" src={process.env.PUBLIC_URL + BlogImagePath2} alt="Blog-2" />
                    </div>
                </div>

            </div>
        </>
}
