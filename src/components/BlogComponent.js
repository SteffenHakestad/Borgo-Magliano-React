export default function BlogComponent({ProfileName, ProfilePicture, BlogText, BlogImagePath}) {
    return <>
            <div className="blog-container">
                <div className="blog-header-container">
                    <div className="blog-profile-picture-frame">
                        <img className="blog-profile-picture" src={process.env.PUBLIC_URL + ProfilePicture} alt="Profile" />
                    </div>
                    <div className="blog-profile-name">{ProfileName}</div>
                </div>
                <div className="event-divider"></div>
                <p className="blog-text">{BlogText}</p>
                <img className="blog-image" src={process.env.PUBLIC_URL + BlogImagePath} alt="Blog-1" />

            </div>
        </>
}
