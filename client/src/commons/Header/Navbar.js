import React, {useState} from 'react'
import Link from '@material-ui/core/Link';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import Box from "@material-ui/core/Box";
import Muse from '../../fonts/MuseoSans-500.woff'

import {makeStyles} from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem'
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles({
    menuItem: {
        marginRight: '15px',
       marginLeft: '15px',
        color: ' #444444 ',
        "&:hover": {
            color: ' #6686FF '
        }
    }
});

export const NavBar = (props) => {
    // const [value, setValue] = useState('');
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box display={'flex'} flexWrap="wrap" alignItems='center' justifyContent={'space-between'}>
                <Link
                    component="button"
                    variant="body2"
                    underline={'none'}
                    className={classes.menuItem}
                >
                    <Box display={'flex'} flexWrap="wrap" alignItems='center'>
                        <p>Shop</p>
                        <ExpandMoreSharpIcon fontSize={"small"}/>
                    </Box>
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    underline={'none'}
                    className={classes.menuItem}
                >
                    Customer Favorites
                </Link>
                <Link
                    component="button"
                    variant="body2"
                    underline={'none'}
                    className={classes.menuItem}
                >
                    Contact
                </Link>
            </Box>
        </React.Fragment>
    )
};