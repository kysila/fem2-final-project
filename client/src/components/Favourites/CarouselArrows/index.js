export const buttons = {
	circle: {
		position: 'absolute',
		top: '134px',
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '1.5px solid #EAEAEA',
		backgroundColor: '#FFFFFF',
		cursor: 'pointer',
		zIndex: 1000,
		'&:hover': {
			border: '1.5px solid #AAAAAA',
		}
	},
	arrow: {
		display: 'block',
		width: '10px',
		height: '18px',
		position: 'absolute',
		top: 'calc(50% - 9px)',
		left: 'calc(50% - 5px)',
	}
};