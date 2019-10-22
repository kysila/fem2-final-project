import React, {useState} from 'react'


import Link from '@material-ui/core/Link';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Box from "@material-ui/core/Box";
import {makeStyles, createStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import TollIcon from '@material-ui/icons/Toll';

const useStyles = makeStyles(() =>
    createStyles({
        menuItem: {
            marginRight: '15px',
            marginLeft: '15px',
            color: ' #444444 ',
            "&:hover": {
                color: ' #6686FF '
            }
        },
        container: {
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        drawer: {},
        paper: {
            paddingRight: '0.5%',
            paddingTop: '2%',
            background: '#f4efff',
            fontSize: '20px',
            color: '#9c80ff',
        },
        list: {
            marginRight: '50px',
            divider: 'true',
            width: '250px',
        },
        item: {
            margin: '2%'
        },
        text: {
            display: 'inline-block',
            padding: '3%'
        },
        logo: {
            paddingLeft: '8%',
            marginBottom: '5%'
        }

    }));

export const NavBar = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const classes = useStyles();
    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.paper,
                }}
                open={menuIsOpen}
                onClose={(menuIsOpen) => {
                    setMenuIsOpen(false)
                }}>
                <div className={classes.logo}>
                    <img src="img/logo.svg" alt="Logo"/>
                </div>
                <List>
                    {[' SCOOTERS ', 'BIKES', 'SKATES', 'UNICYCLES', 'HOVERBORDS'].map((text, index) => (
                        <ListItem
                            divider={'true'}
                            dense={'true'}
                            button key={text}
                            className={classes.list}
                            classes={{button: classes.item}}
                        >
                            <TollIcon/>
                            <ListItemText classes={{primary: classes.text}} primary={text}/>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <Box className={classes.container}>
                <Link component="button" variant="body2" underline={'none'} className={classes.menuItem}>
                    <Box onClick={(menuIsOpen) => {
                        setMenuIsOpen(true)
                    }}
                         className={classes.container}>
                        <p>Shop</p>
                        <ExpandMoreSharpIcon fontSize={"small"}/>
                    </Box>
                </Link>
                <Link component="button" variant="body2" underline={'none'} className={classes.menuItem}>
                    Customer Favorites
                </Link>
                <Link component="button" variant="body2" underline={'none'} className={classes.menuItem}>
                    Contact
                </Link>
            </Box>
        </React.Fragment>
    )
};