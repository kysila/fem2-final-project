import React from 'react';

import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Header} from "../../commons";
import BrandsBlock from "./BrandsBlock";

import '../../index.css'

//global settings for site
const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        body: {
            fontFamily: "Museo Sans",
            color: '#444444'
        },
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiButton-root': {
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            borderRadius: '4px',
        },

    },
})(() => null);



export function MainPage(props) {
    return (
        <React.Fragment>
            <GlobalCss/>
            <Container maxWidth="md">
                <Header/>
            </Container>
            <BrandsBlock/>

        </React.Fragment>
    )
}
