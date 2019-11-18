import React from 'react';

import Button from '@material-ui/core/Button';

import { HeartIcon } from '../Icons/Icons';

export const AddToWishListButton = ({ obj, user, allProps, className, iconStyle }) => {

  return (
		<Button
			className={className}
			onClick={e => {
				if (user) {
					// Место для логики добавления товара в Wish List
				}
			}}
		>
			<HeartIcon
				color="action"
				className="icon"
				style={iconStyle}
			/>
		</Button>
	);
};
