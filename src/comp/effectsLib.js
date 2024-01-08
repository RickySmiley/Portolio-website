import React from 'react';
import Particles from "react-tsparticles";


class Background extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}

	}

	render() {
		const {numOfParticles, particleColor, lineColor} = this.props;
		console.log("rendering background");
		

		const options = {
			particles: {
				number: {
					value: 80,
				},
				size: {
					value: 3,
				},
				color: {
					value: '#4f1b8e',
				},
				lineLinked: {
					enable: true,
					distance: 150,
					color: '#4f1b8e',
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 3,
				},
			},
			interactivity: {
				// detectsOn: 'canvas',
				events: {
					onHover: {
						enable: true,
						mode: 'grab',
					},
				},
				modes: {
					grab: {
						distance: 150,
						lineLinked: {
							opacity: 1,
						},
					},
				},
			},
		}

		return (
			<Particles options={options} id={'cobweb-background'} />
		);

	};
}

export default Background;