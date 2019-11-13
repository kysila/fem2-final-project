export const handlerLocalStorage = (keyLocalStorage, arrProductsCart, objParams, cartItem, actions) => {
	let data = localStorage.getItem(keyLocalStorage);
	if (!data) {
		data = JSON.stringify(arrProductsCart);
		localStorage.setItem(keyLocalStorage, data);
		actions(JSON.parse(data));
	}
	else if (data) {
		addToLocalStorage(data, objParams, cartItem, keyLocalStorage, actions)
	}
};

const addToLocalStorage = (data, objParams, cartItem, keyLocalStorage, actions) => {
	const cart = JSON.parse(data);
	if (!filterCartProducts(cart.products, objParams)) {
		cart.products.push(cartItem);
	}
	else {
		cart.products.forEach(el => {
			if (el.product.itemNo === objParams) {
				el.cartQuantity += 1;
			}
		});
	}
	const dataLocalStorage = JSON.stringify(cart);
	localStorage.setItem(keyLocalStorage, dataLocalStorage);
	actions(cart);
};

const filterCartProducts = (arr, objParams) => {
	return arr.some(el => {
		return el.product.itemNo === objParams
	})
};