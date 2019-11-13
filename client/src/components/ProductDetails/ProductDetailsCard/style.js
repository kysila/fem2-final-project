import { makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
	container: {
		marginBottom: 24,
		width: 420,
		maxHeight: 400,
		position: 'sticky',
		top: 135,
		'& > p': {
			fontSize: '15px',
			color: '#6A86E8',
			textTransform: 'uppercase',
		},
		'& > h2': {
			fontFamily: "'Tungsten Book'",
			textTransform: 'capitalize',
		},
	},
	name: {
		marginTop: 10,
		marginBottom: 15,
	},
	otherColors: {
		marginTop: 20,
		marginBottom: 20,
		height: 24,
		display: 'flex',
		'& > a': {
			marginRight: '8px',
			padding: '2px 7px 0px 7px',
			display: 'inline-block',
			textAlign: 'center',
			backgroundColor: '#EAEAEA',
			color: '#707070',
			borderRadius: '3px',
			textTransform: 'capitalize',
		}
	},
	price: {
		display: 'flex',
		'& > p': {
			marginRight: 10,
			fontSize: 20,
			lineHeight: '24px',
			'&.oldPrice': {
				textDecoration: 'line-through',
				color: '#AAAAAA',
			},
		},
	},
	buttons: {
		marginTop: 25,
		boxShadow: 'none',
		'& button': {
			height: 50,
			width: 83,
			fontSize: 14,
			boxShadow: 'none',
			'&:hover': {
				boxShadow: 'none',
			}
		},
		'& .addToCardBtn': {
			width: 250,
			borderRadius: '4px'
		},
		'& .otherBtn': {
			background: 'none',
			color: '#444',
			'&:hover path': {
				fill: '#6686FF'
			}
		}
	},
});