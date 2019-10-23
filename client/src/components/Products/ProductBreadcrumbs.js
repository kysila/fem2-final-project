import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(1, 2),
    },
}));

function handleClick(event) {
    event.preventDefault();
    alert('You clicked a breadcrumb.');
}

export default function ProductsBreadcrumbs() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link to="/" onClick={handleClick}>
                        Homepage
                    </Link>
                    {/*<Link color="inherit" href="/products" onClick={handleClick}>*/}
                    {/*    All Products*/}
                    {/*</Link>*/}
                    <Typography color="textPrimary">All products</Typography>
                </Breadcrumbs>
            </Paper>

        </div>
    );
}