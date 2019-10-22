import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Search} from "./Searchbar";
import {NavBar} from "./Navbar";
import {Cart} from './Cart';



import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ArrowRightOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(() =>
    createStyles({
        appBar: {
            width: '100%',
            backgroundColor: '#FFFFFF',
            padding: '10px',
            position: 'sticky'
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
        drawer: {},
        paper: {
            paddingRight: '2%',
            paddingTop: '2%',
            background: '#f4efff',
            fontSize: '20px',
            color: '#9c80ff',
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
            color: '#FFFFFF'
        },
        call: {
            color: '#6A86E8'
        }

    }));

export const Header = props => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const  [menu, setMenu] = useState('');
    let menuItems;
    const classes = useStyles();

    useEffect(()=> {
        axios.get("/").then(data => {
            console.log('data in axios then', data);
            setMenu(data);
            console.log('menu after axios', menu)
        });


        return () => {
            console.log('unmount');
        }
    },[]);

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar className={classes.appBar}>
                <Container maxWidth='md'>
                    <Box className={classes.container}>
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
                        <Cart count={2} />
                                  </Box>
                    <Box className={classes.container}>
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




