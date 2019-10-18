import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import {logoImg} from "../../img";

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles({
    search: {
        fontSize: '12px',
        color: '#444444',
        width: '100%'
    },
    appBar: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10px'
    },
    link: {
        color: "#444444",
        margin: '2%',
        alignItems: 'center',
        fontSize: '14px',
        lineHeight: '120%'
    },
    input: {
        alignItems: 'center',
        marginRight: '1%',
        marginLeft: '1%',
        flexGrow: '1',
        display: 'flex'

    },
    button: {
        position: 'absolute',
        height: '75%',
        width: '7%',
        right: '0px',
        top: '0px'
    }

});

export const Header = props => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar className={classes.appBar}>
                <Container maxWidth='md'>
                    <Box display='flex' flexWrap="wrap">

                        <Box className={classes.link}>
                            <Link to={'/'}>
                                <img src={logoImg.logo} alt="Logo"/>
                            </Link>
                        </Box>

                        <Box className={classes.input}>
                            <SearchBar
                                // onChange={(newValue) => this.setState({ value: newValue })}
                                // onRequestSearch={() => doSomethingWith(this.state.value)}
                                className={classes.search}
                                placeholder={"Type in what you're looking for"}
                                searchIcon=	<SearchIcon style={{
                                    color: ' #6686FF '
                            }}
                                closeIcon=<ClearIcon style={{
                                    background: ' #6686FF '
                                }}

                                />

                            />
                                    />

                                {/*<Button variant="outlined" className={classes.button}>fdfd</Button>*/}
                                    </Box>

                                    <Box className={classes.link}>
                                    <Link to={'/login'}>Login |</Link>
                                    <Link to={'/login'}> Sign Up</Link>
                                    </Box>

                                    </Box>
                                    </Container>
                                    </AppBar>


                                    </React.Fragment>
                                    )
                                    }




