import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '40px',
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		minHeight: '300px',
		[theme.breakpoints.down(481)]: {
			minHeight: '250px',
		},
		'& header': {
			boxShadow: 'none !important',
		},
	},
	desktopTabs: {
		[theme.breakpoints.down(481)]: {
			display: 'none',
		}
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
			},
			[theme.breakpoints.down(561)]: {
				marginRight: '30px',
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
	mobileTabs: {
		display: 'none',
		[theme.breakpoints.down(481)]: {
			display: 'block',
			marginTop: '60px',
		},
		'& .MuiPaper-elevation1': {
			boxShadow: 'none',
			border: 'none',
			'& .MuiExpansionPanelSummary-root': {
				padding: 0,
			},
			'& .MuiExpansionPanelSummary-root .Mui-expanded p': {
				color: '#6A86E8',
			},
		},
		'& .MuiExpansionPanelDetails-root': {
			padding: 0,
		}
	},
	heading: {
		fontSize: 14,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		color: '#444',
	},
}));