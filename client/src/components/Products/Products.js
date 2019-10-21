import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

import {SingleProduct} from "../SingleProduct/SingleProduct";

export  const Products = ({name, itemImg, price, url, rating}) => {
    const [list, setList] = useState({});
    console.log('list', list)
    let products;
    if(list.data)  {
        console.log('зашел в условие if list.data')
        products = list.data.map((el)=>{
            return <SingleProduct
                key={el.itemNo}
                name={el.name}
                itemImg={el.imageUrls[0]}
                price={el.currentPrice}
                url={`products/${el.itemNo}`}
                rating={el.rating}

            />
        })
    }

    useEffect(()=> {
        axios.get("/products").then(data => {
            console.log('data in axios then', data)

            setList(data);
            console.log('list after axios', list)
     });


        return () => {
            console.log('unmount');
        }
    },[]);

    return (
        <div>
            <h5>{name}</h5>
            <img src={itemImg} alt=""/>
            <strong>{price}</strong>
            {/*<Link to={url}>Details</Link>*/}
        </div>
    )
}