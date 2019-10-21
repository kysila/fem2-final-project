import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
	card: {
		maxWidth: 251,
		minHeight: 334,
		boxSizing: 'border-box',
	},
	media: {
		height: 210,
		width: 210,
		margin: '0 20px 0 20px',
		backgroundPosition: 'center center',
	},
	cardContent: {
		padding: '0 20px 20px 20px',
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
		marginTop: 10,
		marginBottom: 10,
		fontSize: 14,
		lineHeight: '20px',
		color: '#444444'
	}
});

export function ProductCard ({rating}) {
	const [value, setValue] = React.useState(rating);

	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image="img/products/image31.png"
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
					<Rating
						value={value}
						readOnly />
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