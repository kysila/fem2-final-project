import React from 'react';
import { buttons } from './index';

export const SamplePrevArrow = (props) => {
	const { prevArrow, onClick } = props;

	const style = { ...buttons.circle };
	style.left = '-112px';

	const prev = { ...buttons.arrow };

	return (
		<div
			className={prevArrow}
			style={{ ...style, display: 'block' }}
			onClick={onClick}>
			<span
				style={{ ...prev, background: 'url("img/prevIcon.png") center center no-repeat' }}/>
		</div>
	);
};