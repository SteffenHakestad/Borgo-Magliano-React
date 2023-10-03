export default function BlogComponent({ProfileName, ProfilePicture, BlogText, BlogImagePath}) {
    return <>
            <div className="blog-container">
                <div className="blog-header-container">
                    <div className="profile-picture-frame">
                        <img className="blog-profile-picture" src={process.env.PUBLIC_URL + ProfilePicture} alt="Profile" />
                    </div>
                    <a className="blog-profile-name">{ProfileName}</a>
                </div>
                <div className="event-divider"></div>
                <p className="blog-text">{BlogText}</p>
            </div>
        </>
}
