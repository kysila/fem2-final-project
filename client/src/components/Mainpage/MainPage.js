import React from 'react';

import '../../index.css'


import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Header} from "../../commons";

//global settings for site
const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        body: {
            fontFamily: "'Museo Sans 500'",
            color: "#444444"
        },
        a: {
            textDecoration: 'none'

        },
        // You should target [class*="MuiButton-root"] instead if you nest themes.
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

                <Header/>

        </React.Fragment>
    )
}