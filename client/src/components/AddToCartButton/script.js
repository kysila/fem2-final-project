export const handlerLocalStorage = (keyLocalStorage, arrProductsCart, objParams, cartItem, actions, objQuantity, callback) => {
	let data = localStorage.getItem(keyLocalStorage);
	if (!data) {
		data = JSON.stringify(arrProductsCart);
		localStorage.setItem(keyLocalStorage, data);
		actions(JSON.parse(data));
	}
	else {
		addToLocalStorage(data, objParams, cartItem, keyLocalStorage, actions, objQuantity, callback)
	}
};

const addToLocalStorage = (data, objParams, cartItem, keyLocalStorage, actions, objQuantity, callback) => {
	const cart = JSON.parse(data);
	if (!filterCartProducts(cart.products, objParams)) {
		cart.products.push(cartItem);
	}
	else {
		cart.products.forEach(el => {
			if (el.product.itemNo === objParams && el.cartQuantity < objQuantity) {
				console.log(objQuantity);
				console.log(el.cartQuantity);
				el.cartQuantity += 1;
				console.log('add item');
			}
			if (el.product.itemNo === objParams && objQuantity === el.cartQuantity) {
				console.log('===');
				callback()
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