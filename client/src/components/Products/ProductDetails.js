import React from 'react';


export const ProductDetails = ({
  name, itemImg, price, url, rating,
}) => (
  <div>
    <h5>{name}</h5>
    <img src={itemImg} alt="" />
    <strong>{price}</strong>
    {/* <Link to={url}>Details</Link> */}
  </div>
);
