import React from 'react';
import '../../index.css';

import { Header } from '../../commons';
import BrandsBlock from './BrandsBlock';
import { MainCarousel } from '../MainCarousel';
import { Favorites } from '../Favorites/Favorites';
import { Categories } from '../Categories/Categories';
import { Contacts } from './Contacts';
import StayInTouch from '../../commons/Footer/StayInTouch';


export const MainPage = (props) => (
  <React.Fragment>
    <Header callCenter="1-855-324-5387" />
    <MainCarousel />
    <BrandsBlock />
    <Favorites />
    <Categories />
    <Contacts />
    <StayInTouch />
  </React.Fragment>
);
