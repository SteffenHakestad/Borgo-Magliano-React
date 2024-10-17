import React, { useState } from "react";

export default function GalleryComponent({
	ProfileName,
	ProfilePicture,
	GalleryImagePath,
	createdAt,
}) {
	const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});

	const [isPopupOpen, setPopupOpen] = useState(false);

	const handleImageClick = () => {
		setPopupOpen(true);
	};

	const handlePopupClose = () => {
		setPopupOpen(false);
	};

	return (
		<>
			<div className="gallery-component-container">
				<div className="gallery-header-container">
					<div className="gallery-profile-picture-frame">
						<img
							className="gallery-profile-picture"
							src={process.env.PUBLIC_URL + ProfilePicture}
							alt="Profile"
						/>
					</div>
					<div className="gallery-header-text-container">
						<div className="gallery-profile-name">{ProfileName}</div>
						<div className="date-display">{formattedDate}</div>
					</div>
				</div>

				<div className="gallery-image-container" onClick={handleImageClick}>
					<img
						className="gallery-image"
						src={process.env.PUBLIC_URL + GalleryImagePath}
						alt="Gallery-Post"
					/>
				</div>

				{isPopupOpen && (
					<div className="gallery-popup-overlay" onClick={handlePopupClose}>
						<div className="gallery-popup-content">
							<img
								className="gallery-popup-image"
								src={process.env.PUBLIC_URL + GalleryImagePath}
								alt="Gallery-Post"
							/>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

// export default function GalleryComponent({ProfileName, ProfilePicture, GalleryImagePath}) {
//     return <>
//             <div className="gallery-component-container">
//                 <div className="gallery-header-container">
//                     <div className="gallery-profile-picture-frame">
//                         <img className="gallery-profile-picture" src={process.env.PUBLIC_URL + ProfilePicture} alt="Profile" />
//                     </div>
//                     <div className="gallery-profile-name">{ProfileName}</div>
//                 </div>
//                 <div className="gallery-image-container">
//                     <img className="gallery-image" src={process.env.PUBLIC_URL + GalleryImagePath} alt="Gallery-Post" />
//                 </div>
//             </div>
//         </>
// }
