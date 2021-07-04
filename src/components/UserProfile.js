import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router";
import Post, { UserImg, UserInfo, UserName } from "./Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const UserAbout = styled.div`
	background-color: rgb(240, 240, 240);
	padding: 20px 10px;
	border-radius: 10px;
`;
const AboutCont = styled.p``;
export const CustomHead = styled.h2`
	text-align: center;
	padding: 10px 0;
	margin: 20px 0;
	background-color: rgb(230, 230, 230);
	color: #000;
	border-radius: 10px;
`;
const UserProfile = () => {
	const { userId } = useParams();
	const [user, setUser] = useState({});
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUser(data));
	}, [userId]);
	const { name, email, phone, website } = user;

	const [userPosts, setUserPosts] = useState([]);
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUserPosts(data));
	}, [userId]);

	return (
		<div>
			<UserInfo userProfile>
				<UserImg bigImg>
					<FontAwesomeIcon icon={faUserTie} />
				</UserImg>
				<UserName profileName>{name}</UserName>
				<br />
				<hr />
				<br />
				<CustomHead>About</CustomHead>
				<UserAbout>
					<Row>
						<Col md={6} sm={12}>
							<Table striped bordered hover className="mr-2">
								<tr>
									<th>Phone</th>
									<td>{phone}</td>
								</tr>
								<tr>
									<th>Email</th>
									<td>{email}</td>
								</tr>
								<tr>
									<th>Website</th>
									<td>{website}</td>
								</tr>
								<tr>
									<th>Website</th>
									<td>{website}</td>
								</tr>
							</Table>
						</Col>
						<Col md={6} sm={12}>
							<Table striped bordered hover className="ml-2">
								<tr>
									<th>Street</th>
									<td>{user?.address?.street}</td>
								</tr>
								<tr>
									<th>Suite</th>
									<td>{user?.address?.suite}</td>
								</tr>
								<tr>
									<th>City</th>
									<td>{user?.address?.city}</td>
								</tr>
								<tr>
									<th>Zipcode</th>
									<td>{user?.address?.zipcode}</td>
								</tr>
							</Table>
						</Col>
					</Row>
				</UserAbout>
			</UserInfo>

			<CustomHead>Posts</CustomHead>

			{userPosts.map((post) => (
				<Post post={post} />
			))}
		</div>
	);
};

export default UserProfile;
