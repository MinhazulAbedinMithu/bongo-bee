import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	const shuffle = (a) => {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	};
	shuffle(posts);

	return (
		<div>
			{posts.map((post) => (
				<Post key={post.id} post={post}></Post>
			))}
		</div>
	);
};

export default Posts;
