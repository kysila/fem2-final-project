import React from 'react'


export const SingleProduct = ({name, itemImg, price, url, rating})=>{
    return(
        <div>
            <h5>{name}</h5>
            <img src={itemImg} alt=""/>
            <strong>{price}</strong>
            {/*<Link to={url}>Details</Link>*/}
        </div>
    )
};