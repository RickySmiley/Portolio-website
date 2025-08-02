import React, {useCallback, useMemo} from 'react';
import Particles from "react-tsparticles";
import {loadFull} from 'tsparticles';

const Background = (props) => {
	const options = useMemo(() => ({

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
					value: 2.5,
				},
				color: {
					value: [ "#FF0061", "#f6540e", "#ff0008"],
					animation: {
						enable: true,
						speed: 20,
						sync: false,
					}
				},
				links: {
					enable: true,
					color: {
						value:  ["#FF0061"],
					},

				},
				move: {
					enable: true,
					speed: 5,
					parallax: {
						enable: true,
						smooth: 10,
						force: 60,
					}
				},
			},
			destroyed: true,
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: 'grab',
					},
					onClick: {
						enable: true,
						mode: 'repulse',
					}
				},
				modes: {
					repulse: {
						distance: 250,
						duration: 1,
					},
					grab:{
						distance: 100,
						links: {
							opacity: 1
						}
					}
				},
			}
		}), []);


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