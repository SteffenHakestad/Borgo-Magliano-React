import React, { useState, useEffect } from "react";

import BlogComponent from "../components/BlogComponent";
import BlogUploadComponent from "../components/BlogUploadComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useTranslation } from "react-i18next";

export default function Blog() {
	const { t } = useTranslation();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// Fetch data from the backend
		fetch("/api/blog-posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<HeaderComponent HeaderName={"blog"} />

			<BlogUploadComponent UploadDescription={t("blog-upload")} />

			{/*Create a new BlogComponent for every post*/}
			{posts.map((post) => (
				<BlogComponent
					key={post._id}
					//replace name and profile pic from DB somehow
					ProfileName={"Ola Normann"}
					ProfilePicture={"/assets/images/TempProfilePic.png"}
					BlogHeadline={post.blogHeadline}
					BlogText={post.blogText}
					BlogImagePath={post.blogImage}
					createdAt={post.createdAt}
				/>
			))}
		</>
	);
}
