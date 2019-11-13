import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	card: {
		overflow: 'visible',
		marginBottom: 50,
		maxWidth: 251,
		minHeight: 355,
		position: 'relative',
		boxSizing: 'border-box',
		border: '1px solid #EAEAEA',
		borderRadius: 0,
		'&:hover': {
			boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
			zIndex: 100,
		},
	},
	media: {
		height: 200,
		width: 200,
		margin: '10px auto',
		backgroundPosition: 'center center',
	},
	cardContent: {
		padding: '0 20px 20px 20px',
	},
	newPrice: {
		marginRight: 10,
		fontSize: 20,
	},
	oldPrice: {
		fontSize: 20,
		color: '#AAAAAA !important',
		textDecoration: 'line-through',
	},
	fontDesc: {
		height: 41,
		marginTop: 10,
		marginBottom: 10,
		fontSize: 14,
		lineHeight: '20px',
		overflow: 'hidden',
		color: '#444444',
		textTransform: 'capitalize',
	},
	buttonField: {
		width: 'calc(100% + 2px)',
		display: 'block',
		position: 'absolute',
		bottom: 0,
		left: '-1px',
		opacity: 0,
		padding: 0,
		height: 49,
	},
	buttonStyle: {
		margin: 0,
		height: '100%',
		width: 'calc(100% / 3)',
		borderRadius: '0 !important',
		background: 'rgba(255, 255, 255, 1) !important',
		'&:hover': {
			background: 'rgba(238, 238, 238, 1) !important',
			boxShadow: 'none',
			'& .icon': {
				fill: '#6686FF',
			},
		},
	},
	buttonGroup: {
		width: '100%',
		height: '100%',
	},
});
