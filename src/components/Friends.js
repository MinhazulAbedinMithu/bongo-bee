import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { UserImg, UserInfo, UserName, ViewProfile } from "./Post";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";

const Friends = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	const history = useHistory();
	const handleUserProfile = (userId) => {
		const url = `/user/${userId}`;
		history.push(url);
	};

	return (
		<Container>
			<h3>This is friends: {users.length}</h3>
			{users.map((user) => (
				<UserInfo bgColor margin border>
					<UserImg>
						<FontAwesomeIcon icon={faUserTie} />
					</UserImg>
					<UserName>{user.name}</UserName>
					<ViewProfile onClick={() => handleUserProfile(user.id)}>
						View Profile
					</ViewProfile>
				</UserInfo>
			))}
		</Container>
	);
};

export default Friends;
