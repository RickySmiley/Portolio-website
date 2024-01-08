import React from "react";
import Card from "./card";
import "./stylers/contentStyle.css";


const CardList = () => {
	const list = [
		{title: 'Card 1', content: 'Content for Card 1', imageUrl: 'https://placekitten.com/300/200'},
		{title: 'Card 2', content: 'Content for Card 2'},
		{title: 'Card 3', content: 'Content for Card 3', imageUrl: 'https://placekitten.com/300/201'},
		{title: 'Card 1', content: 'Content for Card 1', imageUrl: 'https://placekitten.com/300/200'},
		{title: 'Card 2', content: 'Content for Card 2'},
		{title: 'Card 3', content: 'Content for Card 3', imageUrl: 'https://placekitten.com/300/201'},
		{title: 'Card 1', content: 'Content for Card 1', imageUrl: 'https://placekitten.com/300/200'},
		{title: 'Card 2', content: 'Content for Card 2'},
		{title: 'Card 3', content: 'Content for Card 3', imageUrl: 'https://placekitten.com/300/201'},
	]
	return (
		<div className={"card-list"} >
			{list.map((card, index) => (
				<Card key={index} {...card}/>
			))}
		</div >
	);
};

export default CardList;