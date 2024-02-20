import React, {useCallback, useMemo} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';

const Background = (props) => {
	const options = useMemo(() => {
		return {
			fullScreen: {
				zIndex: -1,
				enable: true
			},
			particles: {
				detectRetina: true,
				number: {
					value: 200,
				},
				size: {
					value: 0.1,
				},
				color: {
					value: [ "#FF0061", "#00ff22", "#8c00ff"],
					// value: ["rgba(255,255,255,0.96)"]
				},
				lineLinked: {
					// enable: true,
					distance: 400,
					color: {
						// value: ["#08ff00", "#FF0061", "#e88a2a"]
						value: ["#897f7f"]
					},

					opacity: 0.9,
					width: 0.5,
				},
				move: {
					enable: true,
					speed: 2,
				},
			},
			destroyed: true,
			interactivity: {
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
					repulse: {
						distance: 90,
						duration: 0.4,
					},
				},
			}
		}}, []);


	const particleInit = useCallback(async (engine) => {
		try {
			await loadFull(engine);
			console.log("------Starting engines----");
		} catch (e) {
			console.log("Error loading engine", e);
		}
	}, []);


	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);


	return <Particles id={props.id} loaded={particlesLoaded} init={particleInit} options={options}/>;


};

export default Background;