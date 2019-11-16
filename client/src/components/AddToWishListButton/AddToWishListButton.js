import React from 'react';

import { HeartIcon } from "../Icons/Icons";

import Button from "@material-ui/core/Button";

export const AddToWishListButton = ({ obj, user, allProps, className, iconStyle }) => {

	return (
		<Button
			className={className}
			onClick={e => {
				if (user) {
					// Место для логики добавления товара в Wish List
					console.log(obj); // Объект товара
					console.log(allProps); // Все входящие в компонент props
				}
			}}>
			<HeartIcon
				color='action'
				className='icon'
				style={iconStyle}/>
		</Button>
	)
};