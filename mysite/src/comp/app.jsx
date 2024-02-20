import Greet from "./heading"
import Background from "./effectsLib";
import "./stylers/app.css"
import Slideshow from "./card";

function App() {
	return (
		<div className={"container"} >
			<div className={"body"}>
			<Background id={"tsparticles"}/>
		</div>
			<div >
				<Greet/>
			</div>
			<div>
				<Slideshow/>
			</div>
		</div >
	);
}

export default App;