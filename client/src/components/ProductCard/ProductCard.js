import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles({
	card: {
		marginBottom: 30,
		maxWidth: 251,
		minHeight: 334,
		boxSizing: 'border-box',
		border: '1px solid #EAEAEA',
		borderRadius: 0,
		boxShadow: 'none',
		'&:hover': {
		}
	},
	media: {
		height: 200,
		width: 200,
		margin: '10px 20px 10px 20px',
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
		color: '#444444',
		textTransform: 'capitalize',
	},
	buttonField: {
		display: 'none',
		transition: 'all .5 ease-in-out',
		padding: 0,
		height: 49,
	},
	buttonStyle: {
		margin: 0,
		height: '100%',
		width: 'calc(100% / 3)',
		background: 'rgba(255, 255, 255, 1) !important',
		'&:hover': {
			background: 'rgba(238, 238, 238, 1) !important',
			boxShadow: 'none',
		},
	},
	buttonGroup: {
		width: '100%',
		height: '100%',
	},
});

const heartIcon = <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z"/>;

const weigherIcon = <path d="M17.5897 17.9076C18.0294 18.5131 18.6102 19.0157 19.2878 19.377C19.9654 19.7382 20.7218 19.9484 21.4989 19.9915C21.6035 19.9972 21.7084 20 21.8136 20C21.919 20 22.0242 19.9972 22.1282 19.9915C22.9054 19.9485 23.6618 19.7383 24.3395 19.3771C25.0172 19.0159 25.5981 18.5132 26.0378 17.9076C26.504 17.2791 26.8115 16.5585 26.9366 15.8007C27.0617 15.043 27.0012 14.2683 26.7596 13.536L22.6088 0.850636C22.5565 0.690695 22.4512 0.550736 22.3084 0.451226C22.1656 0.351715 21.9928 0.297872 21.8152 0.297572C21.6376 0.297271 21.4646 0.350527 21.3214 0.449554C21.1783 0.54858 21.0725 0.688182 21.0195 0.847944L20.6993 1.82648H16.1217C15.9496 1.29772 15.602 0.834946 15.1301 0.506183C14.6582 0.177419 14.0868 0 13.5 0C12.9132 0 12.3419 0.177419 11.8699 0.506183C11.398 0.834946 11.0505 1.29772 10.8783 1.82648H6.3007L5.9805 0.847944C5.92754 0.688182 5.82174 0.54858 5.67857 0.449554C5.5354 0.350527 5.36238 0.297271 5.18479 0.297572C5.00721 0.297872 4.83439 0.351715 4.6916 0.451226C4.54881 0.550736 4.44354 0.690695 4.39119 0.850636L0.240374 13.536C-0.00116614 14.2683 -0.0616962 15.043 0.06342 15.8007C0.188536 16.5585 0.49598 17.2791 0.962203 17.9076C1.40187 18.5132 1.98281 19.0159 2.6605 19.3771C3.33818 19.7383 4.09461 19.9485 4.87181 19.9915C4.97585 19.9972 5.08101 20 5.18639 20C5.29176 20 5.39652 19.9972 5.50114 19.9915C6.27826 19.9484 7.03459 19.7382 7.71218 19.377C8.38978 19.0157 8.97065 18.5131 9.4103 17.9076C9.87661 17.2792 10.1841 16.5585 10.3093 15.8008C10.4344 15.043 10.3739 14.2683 10.1323 13.536L6.79755 3.34492H10.8786C11.0509 3.87344 11.3986 4.33595 11.8704 4.66451C12.3422 4.99307 12.9134 5.17036 13.5 5.17036C14.0866 5.17036 14.6578 4.99307 15.1297 4.66451C15.6015 4.33595 15.9491 3.87344 16.1215 3.34492H20.2024L16.8677 13.536C16.6261 14.2683 16.5656 15.043 16.6907 15.8008C16.8159 16.5585 17.1234 17.2792 17.5897 17.9076ZM8.5933 13.9835C8.61466 14.0488 8.62781 14.115 8.64508 14.1808H1.72754C1.74488 14.115 1.75795 14.0488 1.77937 13.9835L5.18637 3.57097L8.5933 13.9835ZM13.5 3.65217C13.2761 3.65217 13.0573 3.58959 12.8711 3.47235C12.685 3.35511 12.5399 3.18847 12.4542 2.9935C12.3685 2.79853 12.3461 2.584 12.3898 2.37702C12.4334 2.17005 12.5413 1.97993 12.6996 1.83071C12.8579 1.68149 13.0596 1.57987 13.2792 1.5387C13.4988 1.49753 13.7264 1.51866 13.9332 1.59941C14.1401 1.68017 14.3169 1.81693 14.4413 1.9924C14.5657 2.16786 14.632 2.37415 14.632 2.58518C14.6317 2.86808 14.5124 3.13931 14.3002 3.33935C14.0879 3.53939 13.8002 3.65189 13.5 3.65217H13.5ZM18.4067 13.9835L21.8136 3.57097L25.2206 13.9835C25.2421 14.0488 25.2551 14.115 25.2725 14.1808H18.3549C18.3722 14.115 18.3853 14.0488 18.4067 13.9835Z"/>;

const bagIcon = <path d="M10 8H12V5H15V3H12V0H10V3H7V5H10V8ZM6 17C4.9 17 4.01 17.9 4.01 19C4.01 20.1 4.9 21 6 21C7.1 21 8 20.1 8 19C8 17.9 7.1 17 6 17ZM16 17C14.9 17 14.01 17.9 14.01 19C14.01 20.1 14.9 21 16 21C17.1 21 18 20.1 18 19C18 17.9 17.1 17 16 17ZM6.17 13.75L6.2 13.63L7.1 12H14.55C15.3 12 15.96 11.59 16.3 10.97L20.16 3.96L18.42 3H18.41L17.31 5L14.55 10H7.53L7.4 9.73L5.16 5L4.21 3L3.27 1H0V3H2L5.6 10.59L4.25 13.04C4.09 13.32 4 13.65 4 14C4 15.1 4.9 16 6 16H18V14H6.42C6.29 14 6.17 13.89 6.17 13.75Z" fill="url(#paint0_linear)"/>;


export function ProductCard ({name, itemImg, price, url, rating}) {
	const [state, setState] = useState({
		openButtons: false
	});

	const showButtonsPanel = () => {
		setState(() => ({
			openButtons: true
		}));
	};

	const hideButtonsPanel = () => {
		setState({
			openButtons: false
		});
	};

	const classes = useStyles();

	return (
		<Card
			className={classes.card}
			onMouseOver={showButtonsPanel}
			onMouseOut={hideButtonsPanel}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={`${itemImg}`}
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
						{price}
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
						{name}
					</Typography>
					<Rating
						value={rating}
						readOnly />
				</CardContent>
			</CardActionArea>
			<CardActions
				className={classes.buttonField}
				style={state.openButtons ? {display: 'block'} : null}>
				<ButtonGroup
					className={classes.buttonGroup}
					variant="contained"
					aria-label="full-width contained primary button group">
					<Button
						className={classes.buttonStyle}>
						<SvgIcon
							style={{
								width: 23,
								height: 22,
								fill: 'red'
							}}>
							{heartIcon}
						</SvgIcon>
					</Button>
					<Button
						className={classes.buttonStyle}>
						<SvgIcon
							style={{
								width: 30,
								height: 23,
							}}
							color='action'>
							{weigherIcon}
						</SvgIcon>
					</Button>
					<Button
						className={classes.buttonStyle}>
						<img src="img/bag.svg" alt="bag"/>
					</Button>
				</ButtonGroup>
			</CardActions>
		</Card>
	);
}