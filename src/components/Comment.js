import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const CommentBox = styled.div`
	margin: 10px auto;
	border: 1px solid gray;
	
`;
const Comment = (props) => {
	const { name, email, body } = props.comment;
	return (
		<Col md={8} sm={12} className="mx-auto">
			<CommentBox>
				<h4>{name}</h4>
				<small>{email}</small>
				<br />
				<p>{body}</p>
			</CommentBox>
		</Col>
	);
};

export default Comment;
