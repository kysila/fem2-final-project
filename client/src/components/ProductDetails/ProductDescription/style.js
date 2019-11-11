import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 499,
		minHeight: '300px',
		'& header': {
			boxShadow: 'none !important',
		},
	},
	styledTabs: {
		fontSize: 20,
	},
	detailsName: {
		display: 'inline-block',
		width: 125,
		fontSize: 14,
		fontWeight: 'bold',
	},
	detailsDesc: {
		display: 'inline-block',
		width: 'auto',
		fontSize: 14
	},
}));