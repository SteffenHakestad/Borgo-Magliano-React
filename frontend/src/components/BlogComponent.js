import Linkify from "react-linkify";

export default function BlogComponent({
	ProfileName,
	ProfilePicture,
	BlogHeadline,
	BlogText,
	BlogImagePath,
	createdAt,
}) {
	const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});
	return (
		<>
			<div className="blog-container">
				<div className="blog-header-container">
					<div className="blog-profile-picture-frame">
						<img
							className="blog-profile-picture"
							src={process.env.PUBLIC_URL + ProfilePicture}
							alt="Profile"
						/>
					</div>
					<div className="blog-header-text-container">
						<div className="blog-profile-name">{ProfileName}</div>
						<div className="date-display">{formattedDate}</div>
					</div>
				</div>
				<h1 className="blog-headline"> {BlogHeadline}</h1>
				<div className="event-divider"></div>
				<Linkify>
					<p className="blog-text">{BlogText}</p>
				</Linkify>
				<img className="blog-image" src={`${BlogImagePath}`} alt="Blog-media" />
			</div>
		</>
	);
}
