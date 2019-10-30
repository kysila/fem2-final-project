import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			<Box p={3}>{children}</Box>
		</Typography>
	);
}

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
};

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		width: 499,
	},
	'.MuiTab-textColorPrimary.Mui-selected': {
		color: '#6A86E8'
	},
	'.MuiTabs-indicator': {
		backgroundColor: '#6A86E8'
	},
	'.MuiPaper-root': {
		boxShadow: 'none',
	},
	styledTabs: {

	},
	detailsName: {
		display: 'inline-block',
		width: 100,
	},
	detailsDesc: {
		display: 'inline-block',
		width: 'auto',
	}
}));

export const ProductDescription = ({data}) => {

	const [value, setValue] = useState(0);
	const [ state, setState] = useState({});

	const classes = useStyles();
	const theme = useTheme();


	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	const capitalizeFirstLetter = str => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	};

	const renderFeatures = (obj) => {
		return Object.keys(obj).map(key => {
			return (
				<div>
					<div className={classes.detailsName}>{capitalizeFirstLetter(key)}</div>
					<div className={classes.detailsDesc}>{obj[key]}</div>
				</div>
			)
		});
	};

	useEffect(() => {
		if (data) {
			setState(data);
		}
	}, [data]);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					aria-label="simple tabs example"
					className={classes.styledTabs}
				>
					<Tab label="Description" {...a11yProps(0)} />
					<Tab label="Details" {...a11yProps(1)} />
					<Tab label="Warranty" {...a11yProps(2)} />
					<Tab label="Shipping & Return" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				<TabPanel value={value} index={0} dir={theme.direction}>
					Item One!!!
				</TabPanel>
				<TabPanel value={value} index={1} dir={theme.direction}>
					<div className="details">
						<div>
							<div className={classes.detailsName}>Color</div>
							<div className={classes.detailsDesc}>{data.color}</div>
						</div>
						<div>
							<div className={classes.detailsName}>Max Speed</div>
							<div className={classes.detailsDesc}>{data.maxSpeed}</div>
						</div>
						<div>
							<div className={classes.detailsName}>Charging Time</div>
							<div className={classes.detailsDesc}>{data.chargingTime}</div>
						</div>
						<div>
							<div className={classes.detailsName}>Distance</div>
							<div className={classes.detailsDesc}>{data.distance}</div>
						</div>
						{ data.features ? renderFeatures(data.features) : null }
					</div>
				</TabPanel>
				<TabPanel value={value} index={2} dir={theme.direction}>
					Item Three
				</TabPanel>
				<TabPanel value={value} index={3} dir={theme.direction}>
					Item Three!
				</TabPanel>
			</SwipeableViews>
		</div>
	);
}