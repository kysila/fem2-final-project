import React from 'react';
import axios from 'axios';

import { ProductCard } from '../ProductCard/ProductCard';
import { Title } from '../Title/Title';

export const RecentlyViewed = () => {
  const viewedProducts = JSON.parse(localStorage.getItem('product'));
  console.log(viewedProducts);
  while (viewedProducts.length > 5) {
    viewedProducts.shift();
    localStorage.setItem('product', JSON.stringify(viewedProducts));
    console.log(viewedProducts);
  }

  const viewedProductsArray = viewedProducts.map((el) => {
    const results = axios
      .get(el)
      .then((response) => {
        console.log('req', response);
      })
      .catch((err) => {
        alert(`Error happened it's ${err}`);
      });
    return results;
  });


  return (
    <div>
      <Title title="You recently viewed" />

      <ProductCard />
    </div>
  );
};
