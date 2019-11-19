import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	space: {
		marginBottom: '40px',
	},
	paddingTop: {
		paddingTop: '10px',
		paddingBottom: '56px',
	},
	productPage: {
		width: '100%',
		padding: '20px 16px',
		display: 'flex',
		justifyContent: 'space-between',
		position: 'relative',
	},
	productInfo: {
		maxWidth: '500px',
		minWidth: '50%',
		[theme.breakpoints.down(769)]: {
			maxWidth: '100%',
		}
	},
	wrapper: {
		[theme.breakpoints.down(769)]: {
			display: 'flex',
			justifyContent: 'space-between'
		}
	}
}));