import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { makeStyles} from "@material-ui/core";
import Box from '@material-ui/core/Box';

import '../../App.css';

const useStyles = makeStyles(() => ({
	productGallery: {
		marginBottom: 50,
		width: 500,
		height: 'auto',
	},
	mainImage: {
		margin: '10px 0',
		width: '100%',
		height: '376px',
		objectFit: 'contain',
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

export const ProductGallery = ({image}) => {

	const [ state, setState ] = useState({
		img: []
	});
	const [ mainImage, setMainImage] = useState('');
	const classes = useStyles();

	const renderGallery = (arr) => {
		return arr.map((item, i) => {
			return (
				<img
					className={classes.img}
					src={item}
					alt={i}
					key={i}
					onClick={(e) => {
						e.preventDefault();
						selectedImage(i, e.target);
					}}
				/>
			)
		})
	};

	const selectedImage = (index, el) => {
		el.style.opacity = 1;

		let next = el.nextSibling;
		let prev = el.previousSibling;

		while (next) {
			next.style.opacity = '.5';
			next = next.nextSibling;
		}
		while (prev) {
			prev.style.opacity = '.5';
			prev = prev.previousSibling;
		}
		setMainImage(state.img[index])
	};

	useEffect(() => {
		if (image && image.length !== 0) {
			setState(() => ({
				img: image
			}));
		}
	}, [image]);

	return (
		<Box className={classes.productGallery}>
			<img className={classes.mainImage} src={mainImage ? mainImage : state.img[0]} alt=""/>
			<div className={classes.allImage}>
				{renderGallery(state.img)}
			</div>
		</Box>
	)
};