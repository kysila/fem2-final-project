import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import ReactDOMServer from 'react-dom/server';
import HtmlToReact from 'html-to-react';

import axios from 'axios';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './style';

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

export const ProductDescription = ({data}) => {

	const [value, setValue] = useState(0);
	const [ state, setState] = useState({});

	const classes = useStyles();
	const theme = useTheme();

	const HtmlToReactParser = HtmlToReact.Parser;
	const htmlToReactParser = new HtmlToReactParser();

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
		return Object.keys(obj).map((key, i) => {
			return (
				<div key={i}>
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
				<TabPanel className={classes.tab} value={value} index={0} dir={theme.direction}>
					{htmlToReactParser.parse(data.description)}
				</TabPanel>
				<TabPanel className={classes.tab} value={value} index={1} dir={theme.direction}>
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
				<TabPanel className={classes.tab} value={value} index={2} dir={theme.direction}>
					{htmlToReactParser.parse(data.warranty)}
				</TabPanel>
				<TabPanel className={classes.tab} value={value} index={3} dir={theme.direction}>
					{htmlToReactParser.parse(data.shipping)}
				</TabPanel>
			</SwipeableViews>
		</div>
	);
};