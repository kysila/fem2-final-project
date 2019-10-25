import React from 'react';
import '../../index.css';

import { Header } from '../../commons';
import Categories from '../Categories/Categories';
import BrandsBlock from './BrandsBlock';
import StayInTouch from '../../commons/Footer/StayInTouch';
import { Favorites } from '../Favorites/Favorites';
import MainCarousel from "./MainCarousel";


export const MainPage = props => {
  return (
      <React.Fragment>

          <Header callCenter={'1-855-324-5387'} />
          <MainCarousel />
          <BrandsBlock />
          <Favorites />
          <Categories />
          <StayInTouch />
      </React.Fragment>
  )
}
