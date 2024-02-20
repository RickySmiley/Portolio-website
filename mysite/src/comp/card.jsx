import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper, Button, Slide, Card, Box, Container, CardHeader} from '@mui/material'
import Typography from '@mui/material/Typography';
import {useState} from "react";
import CardMedia from '@mui/material/CardMedia';
import pic from '/Users/rickyzermeno/projects/mysite/src/comp/media/luc.png';


const slide = [
	{
		title: 'About Me',
		content: 'This is something',
		media: pic
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
								<Box sx={{ bgcolor: 'rgb(225,161,94)', p:2, height: '50vh', borderRadius: '2px' }}>
									<Typography paragraph={true} variant="body2">
										{slide.content}
									</Typography>
									<CardMedia
										component={'img'}
										image={ slide.media ? slide.media : '' }
										sx={{ height: 500 }}>
									</CardMedia>
								</Box>

								</Paper>
							</Card>
						))}
				</Carousel>
				</Container>
			</div>
		);
	};

export default Slideshow;
