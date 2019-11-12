import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() => ({
	space: {
		marginBottom: '40px',
	},
	paddingTop: {
		paddingTop: '10px',
		paddingBottom: '56px',
	},
	productPage: {
		paddingTop: 20,
		display: 'flex',
		justifyContent: 'space-between',
	},
	productInfo: {
		maxWidth: 500,
	},
}));