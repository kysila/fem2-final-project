import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCart, getCartFromLS } from "../../../store/cart/actions";
import { HeartIcon, BagIcon, WeigherIcon } from "../../Icons/Icons";

import axios from 'axios';

import { Typography } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";

import { useStyles } from "./style";

const mapStateToProps = (store) => ({
	user: store.auth.user,
	cart: store.cartReducer.cart,
});

const ProductDetailsCard = (props) => {
	const obj = props.data.obj;
	const colors = props.data.colors.data;

	const handlerLocalStorage = (name) => {
		let data = localStorage.getItem(name);
		if (!data) {
			const productsCart = {
				products: [
					{
						cartQuantity: 1,
						product: obj,
					}
				],
			};
			data = JSON.stringify(productsCart);
			localStorage.setItem('cart', data);
			props.getCartFromLS(productCart);
		}
		else if (data) {
			addToLocalStorage(data)
		}
	};

	const addToLocalStorage = (data) => {
		const cart = JSON.parse(data);
		if (!filterCart(cart.products, obj)) {
			const productItem = {
				cartQuantity: 1,
				product: obj
			};
			cart.products.push(productItem);
		}
		else {
			cart.products.forEach(el => {
				if (el.product.itemNo === obj.itemNo) {
					el.cartQuantity += 1;
				}
			});
		}
		props.getCartFromLS(cart);
		const test = JSON.stringify(cart);
		localStorage.setItem('cart', test);

	};

	const filterCart = (arr, obj) => {
		return arr.some(el => {
			return el.product.itemNo === obj.itemNo
		})
	};

	let links;
	if (colors) {
		links = colors.map((el, i) => {
			return (
				<Link
					style={ obj.itemNo === el.itemNo
						? { color: '#444',
							backgroundColor: '#FFF',
							border: '1px solid #444',
						}
						: null }
					key={i}
					to={`/products/${el.itemNo}`}>
					{el.color}
				</Link>
			)
		})
	}

	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Typography
				className={classes.categories}
				variant='body1'>
				{obj.categories}
			</Typography>
			<Typography
				className={classes.name}
				variant='h2'>
				{obj.name}
			</Typography>
			<Rating
				name="half-rating"
				size="large"
				precision={0.5}
				value={obj.rating}
				readOnly />
				<Box className={classes.otherColors}>
					{links}
				</Box>
				<Box className={classes.price}>
					<Typography>
						{`$${obj.currentPrice}`}
					</Typography>
					<Typography className='oldPrice'>
						$4000
				</Typography>
				</Box>
			<ButtonGroup
				variant="contained"
				color="primary"
				size="large"
				aria-label="large contained primary button group"
				className={classes.buttons}
			>
				<Button
					className='addToCardBtn'
					onClick={e => {
						props.user ?
							props.addProductToCart(`/cart/${obj._id}`) :
							handlerLocalStorage('cart');
					}}
				>
					<BagIcon
						style={{
							width: 21,
							height: 20,
							fill: '#fff',
							marginRight: 8
						}}/>
					ADD TO CART
				</Button>
				<Button className='otherBtn'>
					<HeartIcon
						className='icon'
						style={{
							fill: '#AAA',
						}}/>
				</Button>
				<Button className='otherBtn'>
					<WeigherIcon
						className='icon'
						style={{
							width: 30,
							height: 23,
							fill: '#AAA'
						}}/>
				</Button>
			</ButtonGroup>
		</div>
	)
};

export default connect(mapStateToProps, { addProductToCart, getCartFromLS })(ProductDetailsCard);