import axios from 'axios';

// ACTIONS WITH CART

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const addProductToCart = (url) => (dispatch) => {
	axios.put(url)
		.then(cart => {
			dispatch({
				type: ADD_PRODUCT_TO_CART,
				payload: cart.data.products,
			})
		})
};