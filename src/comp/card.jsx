import React from "react";
import "./stylers/contentStyle.css";
 

const Card = ({title, content, imageUrl}) => {
	return (
		<div className="card" >
			{imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
			<div className="card-content" >
				<h3 className="card-title" >{title}</h3 >
				<p className="card-text" >{content}</p >
			</div >
		</div >
	);
};

export default Card;
