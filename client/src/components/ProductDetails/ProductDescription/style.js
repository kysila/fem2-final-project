import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		minHeight: '300px',
		'& header': {
			boxShadow: 'none !important',
		},
	},
	styledTabs: {
		fontSize: 20,
		borderBottom: '1px solid #EAEAEA',
		'& .MuiTabs-flexContainer': {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.breakpoints.down(769)]: {
				justifyContent: 'flex-start',
			}
		},
		"& .MuiTab-root": {
			padding: '6px 0 !important',
			border: 'none',
			[theme.breakpoints.down(769)]: {
				marginRight: '48px',
			}
		}
	},
	tab: {
		'& .MuiBox-root': {
			padding: '24px 24px 24px 0 !important',
		}
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