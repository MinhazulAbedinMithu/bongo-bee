import React from "react";
import "./ReactBox.css";

import NoReact from "../../images/like-0.svg";
import Like from "../../images/like.svg";
import Love from "../../images/love.svg";
import Care from "../../images/care.svg";
import Haha from "../../images/haha.svg";
import Wow from "../../images/wow.svg";
import Sad from "../../images/sad.svg";
import Angry from "../../images/angry.svg";

const ReactBox = (props) => {
	const { reaction, setReactionIcon, disabled, toggleDisable } = props;

	const handleReactIcon = (event) => {
		const clickedIcon = event.target.alt;
		if (reaction.iconName === clickedIcon) {
			setReactionIcon(NoReact, "NoReact", false);
		} else {
			let reactIcon;
			switch (clickedIcon) {
				case "Like":
					reactIcon = Like;
					break;
				case "Love":
					reactIcon = Love;
					break;
				case "Care":
					reactIcon = Care;
					break;
				case "Haha":
					reactIcon = Haha;
					break;
				case "Wow":
					reactIcon = Wow;
					break;
				case "Sad":
					reactIcon = Sad;
					break;
				case "Angry":
					reactIcon = Angry;
					break;
				default:
					reactIcon = "";
			}
			setReactionIcon(reactIcon, clickedIcon);
		}
		toggleDisable();
	};
	return (
		<div className={`reactBox ${disabled ? "disable" : ""}`}>
			<div className="reactBox-icons">
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Like} alt="Like" />
					<span>Like</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Love} alt="Love" />
					<span>Love</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Care} alt="Care" />
					<span>Care</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Haha} alt="Haha" />
					<span>Haha</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Wow} alt="Wow" />
					<span>Wow</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Sad} alt="Sad" />
					<span>Sad</span>
				</button>
				<button className="reactBox-icon" onClick={handleReactIcon}>
					<img src={Angry} alt="Angry" />
					<span>Angry</span>
				</button>
			</div>
		</div>
	);
};

export default ReactBox;
