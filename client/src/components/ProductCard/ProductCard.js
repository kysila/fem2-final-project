import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {productImg} from "../../img/products";

const useStyles = makeStyles({
	card: {
		padding: "0 20px 28px 20px",
		maxWidth: 251,
		maxHeight: 334,
		boxSizing: 'border-box',
	},
	cardContent: {
		padding: 0
	},
	media: {
		height: 210,
		width: 210,
		margin: '0 auto',
	},
	newPrice: {
		marginRight: 10,
		fontSize: 20,
		color: '#6A86E8',
	},
	oldPrice: {
		fontSize: 20,
		color: '#AAAAAA',
		textDecoration: 'line-through',
	},
	fontDesc: {
		fontSize: 14,
		lineHeight: '20px',
		color: '#444444'
	}
});

export function ProductCard () {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={productImg.productImg1}
					title="Contemplative Reptile"
				/>
				<CardContent
					className={classes.cardContent}>
					<Typography
						className={classes.newPrice}
						gutterBottom
						colorPrimary
						variant="h5"
						display="inline"
						component="h2">
						$2,699
					</Typography>
					<Typography
						className={classes.oldPrice}
						gutterBottom
						variant="h5"
						display="inline"
						component="h2">
						$4,010
					</Typography>
					<Typography
						className={classes.fontDesc}
						variant="body2"
						component="p">
						Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}