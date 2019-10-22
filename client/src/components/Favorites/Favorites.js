import React, {Component} from "react";
import Slider from "react-slick";
import {Title} from '../Title/Title';
import {ProductCard} from "../ProductCard/ProductCard";

import "slick-carousel/slick/slick.css";

const SampleNextArrow = (props) => {

	const { className, onClick } = props;

	const style = {
		position: 'absolute',
		top: '134px',
		left: '-24px',
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '1.5px solid rgba(106, 134, 232, 0.5)',
		backgroundColor: '#FFFFFF',
		'&::after': {
			content: '>',
			width: '10px',
			height: '17px',
		}
	};

	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
};

function SamplePrevArrow(props) {
	const { className, onClick } = props;

	const style = {
		position: 'absolute',
		top: '134px',
		right: '-24px',
		width: '48px',
		height: '48px',
		borderRadius: '50%',
		border: '1.5px solid rgba(106, 134, 232, 0.5)',
		backgroundColor: '#FFFFFF',
		zIndex: 1000
	};

	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
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
			margin: '0 auto',
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
						itemImg="img/products/image31.png"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/image31.png"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/image31.png"
						price="$2,699"/>
					<ProductCard
						rating={3}
						name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
						itemImg="img/products/image31.png"
						price="$2,699"/>
				</Slider>
			</section>
		);
	}
}

