import React from "react";
import greet from "./heading"
import CardList from "./cardList";
import Background from "./effectsLib";
import "./stylers/app.css"

function App() {
	return (
		<div className={"container"} >
			{greet()}
			<Background />
			<CardList />

		</div >
	);
}

export default App;