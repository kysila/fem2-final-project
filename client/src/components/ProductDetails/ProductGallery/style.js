import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	productGallery: {
		marginBottom: 50,
		width: '100%',
		height: 'auto',
		[theme.breakpoints.down(769)]: {
			maxWidth: 344,
		},
	},
	mainImage: {
		margin: '4px 0 10px 0',
		width: '100%',
		height: '376px',
		objectFit: 'contain',
		[theme.breakpoints.down(769)]: {
			height: '259px',
		}
	},
	allImage: {
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		'& img:first-child': {
			opacity: 1
		}
	},
	img: {
		display: 'block',
		width: 'calc(100% / 6)',
		height: '62px',
		opacity: '.5',
		cursor: 'pointer',
		transition: 'all .5s linear',
		objectFit: 'contain',
	},
}));