import React from 'react';
import { buttons } from './index';

export const SampleNextArrow = (props) => {

	const { className, onClick } = props;

	const style = { ...buttons.circle };
	style.right = '-112px';

	const next = { ...buttons.arrow};

	return (
		<div
			className={className}
			style={{ ...style, display: 'block' }}
			onClick={onClick}>
			<span
				style={{ ...next, background: 'url("img/nextIcon.png") center center no-repeat' }}/>
		</div>
	);
};