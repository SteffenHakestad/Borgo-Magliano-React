import React from "react";
import Linkify from "react-linkify";
//Using linkify to make links in text clickable

export default function NewsComponent({
	newsHeadline,
	newsText,
	newsImagePath,
	createdAt,
}) {
	const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});
	return (
		<>
			<div className="news-container">
				<div className="news-title-background">
					<h1>
						<Linkify>{newsHeadline}</Linkify>
					</h1>
					<div className="date-display">{formattedDate}</div>
				</div>

				<div className="news-text-background">
					<p>
						<Linkify>{newsText}</Linkify>
					</p>
				</div>
				<div className="news-image-container">
					<img
						className="news-image"
						src={`${newsImagePath}`}
						alt="news-media"
					/>
				</div>
			</div>
		</>
	);
}
