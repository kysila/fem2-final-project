import React from 'react';

import '../../index.css'


import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Header} from "../../commons";
import BrandsBlock from "./BrandsBlock";

import {ProductCard} from '../ProductCard/ProductCard';

const GlobalCss = withStyles({
    '@global': {
        body: {
            fontFamily: "'Museo Sans 500'",
            color: "#444444"
        },
        '.MuiTypography-body2': {
            fontFamily: "'Museo Sans 500'"
        },
        a: {
            textDecoration: 'none'
        },
       '.MuiButton-root': {
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            borderRadius: '4px',
            border: 'none',
            color: '#FFFFFF'
        },

    },
})(() => null);




export const MainPage = props => {
    return (
        <React.Fragment>
            <GlobalCss/>
                <Header count={2} callCenter={'1-855-324-5387'}/>
                <BrandsBlock/>
								<ProductCard/>
        </React.Fragment>
    )
}