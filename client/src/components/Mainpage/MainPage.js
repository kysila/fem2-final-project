import React from 'react';
import '../../index.css'

import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {Header} from "../../commons";
import Categories from "../Categories/Categories";
import BrandsBlock from "./BrandsBlock";
import StayInTouch from "./StayInTouch";
import {ProductCard} from '../ProductCard/ProductCard';

const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        body: {
            fontFamily: '"Museo Sans 500"',
            color: '#444444'
        },
        a: {
            textDecoration: 'none'
        },
        '.MuiTypography-body2': {
            fontFamily: "'Museo Sans 500'"
        },
        '.MuiButton-root': {
            fontFamily: "'Museo Sans 500'",
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            borderRadius: '4px',
            border: 'none',
            color: '#FFFFFF'
        },
        '.MuiTypography-root':{
            fontFamily: "'Museo Sans 500'",
            color: "#444444"
        },
        '.MuiButtonGroup-groupedContainedPrimary:not(:last-child)': {
          borderRight: '1px solid #EAEAEA',
        }
    },
})(() => null);



export const MainPage = props => {
        return (
        <React.Fragment>
            <GlobalCss/>
                <Header callCenter={'1-855-324-5387'}/>
                <BrandsBlock/>
                <ProductCard rating={3}
                             name="Addmotor M-5500 Commemorative Flying Tiger Electric Fat Bike"
                             itemImg="img/products/image31.png"
                             price="$2,699"
                                />
                <Categories/>
                <StayInTouch/>
        </React.Fragment>
    )
}
