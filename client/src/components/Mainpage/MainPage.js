import React from 'react';
import '../../index.css';

import { Header, Footer } from '../../commons';
import { MainCarousel } from '../MainCarousel/MainCarousel';
import BrandsBlock from './BrandsBlock/BrandsBlock';
import { Favourites } from '../Favourites/Favourites';
import { Categories } from '../Categories/Categories';
import { Contacts } from './Contacts';
import StayInTouch from '../../commons/Footer/StayInTouch/StayInTouch';


export const MainPage = (props) => (
  <React.Fragment>
    <Header callCenter="1-855-324-5387" />
    <MainCarousel />
    <BrandsBlock />
    <Favourites />
    <Categories />
    <Contacts />
    <StayInTouch />
    <Footer />
  </React.Fragment>
);
