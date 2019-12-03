// eslint-disable-next-line max-len
export const handlerLocalStorage = (keyLocalStorage, arrProductsCart, objParams, cartItem, actions, objQuantity, callback) => {
  let data = localStorage.getItem(keyLocalStorage);
  if (!data) {
    data = JSON.stringify(arrProductsCart);
    localStorage.setItem(keyLocalStorage, data);
    actions(JSON.parse(data));
  } else {
    // eslint-disable-next-line no-use-before-define
    addToLocalStorage(data, objParams, cartItem, keyLocalStorage, actions, objQuantity, callback);
  }
};

// eslint-disable-next-line max-len
const addToLocalStorage = (data, objParams, cartItem, keyLocalStorage, actions, objQuantity, callback) => {
  const cart = JSON.parse(data);
  // eslint-disable-next-line no-use-before-define
  if (!filterCartProducts(cart.products, objParams)) {
    cart.products.push(cartItem);
  } else {
    cart.products.forEach((el) => {
      if (el.product.itemNo === objParams && el.cartQuantity < objQuantity) {
        el.cartQuantity += 1;
      }
      if (el.product.itemNo === objParams && objQuantity === el.cartQuantity) {
        callback();
      }
    });
  }
  const dataLocalStorage = JSON.stringify(cart);
  localStorage.setItem(keyLocalStorage, dataLocalStorage);
  actions(cart);
};

const filterCartProducts = (arr, objParams) => arr.some((el) => el.product.itemNo === objParams);
