import React, { useState, useEffect } from "react";
import NewsUploadComponent from "../components/NewsUploadComponent";
import NewsComponent from "../components/NewsComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../components/HeaderComponent";

export default function News() {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/news-posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<HeaderComponent HeaderName={"news"} />
			{/* Component below should only be visible if you have an admin account. Normal account and not logged in users should not be able to see it */}
			<NewsUploadComponent UploadDescription={t("news-upload")} />

			{/*Create a new NewsComponent for every post*/}
			{posts.map((post) => (
				<NewsComponent
					key={post._id}
					newsHeadline={post.newsHeadline}
					newsText={post.newsText}
					newsImagePath={post.newsImage}
					createdAt={post.createdAt}
				/>
			))}
		</>
	);
}
