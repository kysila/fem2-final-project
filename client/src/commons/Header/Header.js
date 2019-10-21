import React from 'react'
import {Link} from 'react-router-dom'
// import {logoImg} from "../../img";

import {makeStyles} from '@material-ui/core/styles';
import {Search} from "./Searchbar";
import {NavBar} from "./Navbar";

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

import TextField from '@material-ui/core/TextField';


import Box from '@material-ui/core/Box';


import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
    appBar: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10px'
    },
    container: {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    link: {
        color: "#444444",
        margin: '2%',
        alignItems: 'center',
        fontSize: '14px'
       },
    input: {
        width: '45%'
    },
    basket: {
        position: 'relative',
        borderRadius: '50%',
        border: '1px solid #6A86E8',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        paddingTop: '14px'
    },
    circle: {
        backgroundColor: ' #6A86E8 ',
        borderRadius: '50%',
        height: '15px',
        width: '15px',
        position: 'absolute',
        top: '0px',
        right: '0px',
        fontSize: '11px',
        color: ' #FFFFFF '
    },
    call: {
        color: ' #6A86E8 '
    }

});

export const Header = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar className={classes.appBar}>
                <Container maxWidth='md'>
                    <Box className={classes.container} >
                        <Box className={classes.link}>
                            <Link to={'/'}>
                                <img src="img/logo.svg" alt="Logo"/>
                            </Link>
                        </Box>

                        <Box className={classes.input}>
                            <Search/>
                        </Box>

                        <Box className={classes.link}>
                            <Link to={'/login'}>Login |</Link>
                            <Link to={'/login'}> Sign Up</Link>
                        </Box>

                        <Box className={classes.basket}>
                            <Link to={'/basket'}>
                                <img src="img/basket.svg" alt="Logo"/>
                                <div className={classes.circle}>{props.count}</div>
                            </Link>
                        </Box>


                    </Box>
                    <Box className={classes.container} >
                        <Box>
                            <NavBar/>
                        </Box>
                        <Box className={classes.call}>
                            <p>Call or text us toll-free: {props.callCenter}</p>
                        </Box>

                    </Box>
                </Container>
            </AppBar>


        </React.Fragment>
    )
}




