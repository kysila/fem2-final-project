import React from 'react';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(theme => ({
    greyBg:{
        backgroundColor: '#FAFAFA',
        position: 'relative',
    },
    filterBtn:{

        '&>button':{
            borderRadius: '0',
            background: '#F5F5F5',
            color: '#444444',
            width: '94px',
            textTransform: 'capitalize',
            fontSize: '14px',
            padding: '13px 20px',
            boxShadow: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        },
        '&>button:hover':{
            background: '#F5F5F5',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'
        },
        '&>button:after':{
            content: "''",
            width: '5px',
            height: '5px',
            borderTop: '1px solid #444444',
            borderLeft: '1px solid #444444',
            transform: 'rotate(-135deg)',
            display: 'inline-block',
            marginLeft: '7px'
        },

    },
    selectedFilters:{
        minHeight: '65px',
        padding: "20px 0 20px"
    },
    paper: {
        position: 'absolute',
        top: '100%',
        right: 0,
        left: 0,
        backgroundColor: '#fff'
    },

}));

const Filter = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>

                <Grid container
                      spacing={1}
                      className={classes.greyBg}
                      alignItems="center"
                      justify="space-between"
                >
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className={classes.filterBtn}>
                            <button type="button" onClick={handleClick}>
                                Filter
                            </button>
                            {open && <div className={classes.paper}>Click me, I will stay visible.</div>}
                        </div>
                    </ClickAwayListener>

                </Grid>
            <Grid container className={classes.selectedFilters}>


            </Grid>
        </React.Fragment>
    );
};

export default Filter;