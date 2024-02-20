import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Slide, Card, Box, Container, CardHeader} from '@mui/material'
import Typography from '@mui/material/Typography';
import {useState} from "react";
import CardMedia from '@mui/material/CardMedia';


const slide = [
	{
		title: 'About Me',
		content: 'This is something',
		media: 'src/luc.png'
	},
	{
		title: 'Second slide',
		content: 'This is something',
		media: ''
	},
	{
		title: 'Thirst slide',
		content: 'This is something',
		media: ''
	},
	{
		title: 'Second slide',
		content: 'This is something',
		media: ''
	},
	{
		title: 'Thirst slide',
		content: 'This is something',
		media: ''
	}
];

	const Slideshow = () => {
		const [activeStep, setActiveStep] = useState(0);


		const handleStepChange = (step) => {
			setActiveStep(step);

		};

		return (
			<div>
				<Container >
					<Carousel animation={"slide"} duration={2000} navButtonsProps={{ style: { backgroundColor: 'cornflowerblue', borderRadius: 40 }}}  navButtonsWrapperProps={{style: {bottom: '0', top: 'auto'}}} >
						{slide.map((slide, index) => (
							<Card key={index}  >
								<Paper sx={{ borderRadius: "30px" }} elevation={3}>
									<Box>
									<Typography color={'secondary'} gutterBottom={true} variant="h3">
										{slide.title}
									</Typography>
								</Box>
								<Box sx={{ bgcolor: 'rgba(72,159,255,0.41)', p:2, height: '50vh', borderRadius: '2px' }}>
									<Typography paragraph={true} variant="body2">
										{slide.content}
									</Typography>
								</Box>

								</Paper>
								<CardMedia
									image={ '/Users/rickyzermeno/projects/mysite/src/luc.png' }
									sx={{ height: 140 }}>
								</CardMedia>
							</Card>
						))}
				</Carousel>
				</Container>
			</div>
		);
	};

export default Slideshow;
