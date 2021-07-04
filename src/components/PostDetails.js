import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "./Comment";
import Post from "./Post";
import { CustomHead } from "./UserProfile";

const PostDetails = () => {
	const { postId } = useParams();
	const [comments, setComments] = useState([]);
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, [postId]);
	// console.log(comments);

	const [post, setPost] = useState({});
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPost(data));
	});
	return (
		<div>
			<Post post={post}></Post>
			<CustomHead>Comments</CustomHead>
			{comments.map((comment) => (
				<Comment comment={comment}></Comment>
			))}
		</div>
	);
};

export default PostDetails;
