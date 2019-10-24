import React from 'react';
import '../../index.css';

import { Header } from '../../commons';
import { Categories } from '../Categories/Categories';
import BrandsBlock from './BrandsBlock';
import { Favorites } from '../Favorites/Favorites';
import { Contacts } from './Contacts';

export const MainPage = (props) => (
  <React.Fragment>
    <Header callCenter="1-855-324-5387" />
    <BrandsBlock />
    <Favorites />
    <Categories />
    <Contacts />
  </React.Fragment>
);
