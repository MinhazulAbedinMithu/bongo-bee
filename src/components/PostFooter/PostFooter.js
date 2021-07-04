import React, { useState } from "react";
import "./PostFooter.css";
import NoReact from "../../images/like-0.svg";
import Like from "../../images/like.svg";
import Comment from "../../images/comment.svg";
import Share from "../../images/share.svg";
import ReactBox from "../ReactBox/ReactBox";
import { useHistory } from "react-router";

const PostFooter = (props) => {
	const [reaction, setReaction] = useState({
		isReacted: false,
		icon: NoReact,
		iconName: "NoReact",
	});
	const [disabled, setDisabled] = useState(false);
	const setReactionIcon = (icon, name, react) =>
		setReaction({
			isReacted: react === undefined ? true : false,
			icon: icon,
			iconName: name,
		});
	const handleReactBtn = () => {
		reaction.isReacted
			? setReactionIcon(NoReact, "NoReact", false)
			: setReactionIcon(Like, "Like");
	};
	const toggleDisable = () => {
		setDisabled(true);

		setTimeout(() => {
			setDisabled(false);
		}, 200);
	};

  const history = useHistory();
  const handlePostComment = (postId) =>{
    const url = `/post/${postId}`;
		history.push(url);
  }


	return (
		<div className="card-footer">
			<button
				className={`react-btn ${disabled ? "disable" : ""} ${
					reaction.isReacted ? reaction.iconName.toLowerCase() : ""
				}`}
				onClick={() => {
					handleReactBtn();
					toggleDisable();
				}}
			>
				<img src={reaction.icon} alt="React" />{" "}
				{(reaction.isReacted && reaction.iconName) || "Like"}
			</button>
			<ReactBox
				reaction={reaction}
				setReactionIcon={setReactionIcon}
				disabled={disabled}
				toggleDisable={toggleDisable}
			></ReactBox>
			<button className="comment-box" onClick={() => handlePostComment(props.postId)}>
				<img src={Comment} alt="comment" /> Comment
			</button>
			<button className="share-box">
				<img src={Share} alt="share" /> Share
			</button>
		</div>
	);
};

export default PostFooter;
