import React, { useEffect, useState } from "react";
import "./style.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import PostFooter from "./PostFooter/PostFooter";
import { useHistory } from "react-router";

const PostDiv = styled.div`
	padding: 10px;
	margin: 25px auto;
	border: 1px solid transparent;
	box-shadow: 10px 10px 15px gray;
	border-radius: 10px;
`;
export const UserInfo = styled.div`
	display: ${(props) => (props.userProfile ? "block" : "flex")};
	vertical-align: middle;
	margin: ${(props) => (props.margin ? "10px 0" : 0)};
	background-color: ${(props) => (props.bgColor ? "rgb(240, 240, 240)" : "")};
	border-radius: ${(props) => (props.border ? "10px" : 0)};
	text-align: ${(props) => (props.userProfile ? "center" : "")};
`;
export const UserImg = styled.span`
	border-radius: 50%;
	font-size: ${(props) => (props.bigImg ? "180px" : "60px")};
	border: 1px solid gray;
	padding: 10px 25px;
	margin: 10px;
`;
export const UserName = styled.h2`
	color: black;
	padding: 20px 10px;
	font-size: ${(props) => (props.profileName ? "50px" : "24px")};
	font-family: cursive;
	padding: ${(props) => (props.profileName ? "0" : "40px 10px")};
`;
export const ViewProfile = styled.button`
	color: black;
	border: 2px solid black;
	border-radius: 10px;
	font-weight: bold;
	font-size: 16px;
	/* padding: 5px 10px; */
	margin: 30px 10px 30px auto;
	cursor: pointer;
`;
const PostInfo = styled.div`
	border: 1px solid lightgray;
	padding: 15px;
	border-radius: 10px;
`;
const PostTitle = styled.h3`
	color: orange;
	font-size: 30px;
	color: black;
	margin: 0;
`;
const PostBody = styled.p`
	color: #2a2a2a;
	font-size: 22px;
	line-height: 28px;
`;

const Post = (props) => {
	const { userId, id, title, body } = props.post;
	const [user, setUser] = useState([]);
	const { name } = user;
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [userId]);

	const history = useHistory();
	const handleUserProfile = (userId) => {
		const url = `/user/${userId}`;
		history.push(url);
	};

	return (
		<PostDiv className="col-12 col-md-9">
			<UserInfo>
				<UserImg>
					<FontAwesomeIcon icon={faUserTie} />
				</UserImg>
				<UserName>{name}</UserName>
				<ViewProfile onClick={() => handleUserProfile(userId)}>
					View Profile
				</ViewProfile>
			</UserInfo>
			<PostInfo>
				<PostTitle>{title}</PostTitle>
				<br />
				<PostBody>{body}</PostBody>
			</PostInfo>
			<PostFooter postId={id} />
		</PostDiv>
	);
};

export default Post;
