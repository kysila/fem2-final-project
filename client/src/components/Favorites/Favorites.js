import React, {Component} from "react";
import Slider from "react-slick";
import {Title} from '../Title/Title';
import {ProductCard} from "../ProductCard/ProductCard";

import "slick-carousel/slick/slick.css";

const buttons = {
	circle: {
		position: 'absolute',
		top: '134px',
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '1.5px solid rgba(106, 134, 232, 0.5)',
		backgroundColor: '#FFFFFF',
		cursor: 'pointer',
		zIndex: 1000,
	},
	arrow: {
		display: 'block',
		width: '10px',
		height: '18px',
		position: 'absolute',
		top: 'calc(50% - 9px)',
		left: 'calc(50% - 5px)',
	}
};

const SampleNextArrow = (props) => {

	const { className, onClick } = props;

	const style = { ...buttons.circle };
	style.right = '-24px';

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

function SamplePrevArrow(props) {
	const { className, onClick } = props;

	const style = { ...buttons.circle };

	style.left = '-24px';

	const prev = { ...buttons.arrow };

	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}>
			<span
				style={{ ...prev, background: 'url("img/prevIcon.png") center center no-repeat' }}/>
		</div>
	);
};

export class Favorites extends Component {

	render() {
		const containerStyle = {
			backgroundColor: '#fff',
			paddingTop: 80,
			paddingBottom: 30,
		};

		const carouselStyle = {
			maxWidth: 690,
			margin: '50px auto',
		};

		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			initialSlide: 0,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: true,
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<section style={containerStyle}>
				<Title title="Choose from our Customer Favorites" />
				<Slider {...settings}
					style={carouselStyle}>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/e-bikes/1/001.jpg"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/e-bikes/2/001.jpg"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/e-bikes/246046/001.jpg"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/e-bikes/773969/001.jpg"
						price="$2,699"/>
				</Slider>
			</section>
		);
	}
}

