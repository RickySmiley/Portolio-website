 import Background from "./effectsLib";
import "./stylers/app.css"
import Slideshow from "./card";

function App() {
	return (
		<div >
			<div className={"body"}>
			<Background id={"tsparticles"}/>
		</div>
			<div>
				<Slideshow/>
			</div>
		</div >
	);
}

export default App;