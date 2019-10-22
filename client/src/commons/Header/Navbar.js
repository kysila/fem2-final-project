import React, {useState} from 'react'


import Link from '@material-ui/core/Link';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Box from "@material-ui/core/Box";
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles({
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
    drawer: {
       fontSize: '15px',
       color: '#8F8DE2',
    },
    paper: {
        backgroundColor: '#8F8DE2',
        marginRight: '25px'
    }

});



export const NavBar = (props) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const classes = useStyles();
    return (
        <React.Fragment>
            <Drawer  open={menuIsOpen} onClose={(menuIsOpen)=> {setMenuIsOpen(false)} }>
                <List className={classes.drawer}>
                    {['SCOOTERS', 'BIKES', 'SСATES', 'UNICYCLES', 'HOVERBORDS'].map((text, index) => (
                        <ListItem button key={text} >
                            <ArrowRightOutlinedIcon/>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <Box className={classes.container}>
                <Link component="button" variant="body2" underline={'none'} className={classes.menuItem}>
                    <Box onClick={(menuIsOpen)=> {setMenuIsOpen(true)}}
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