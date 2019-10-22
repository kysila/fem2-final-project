import React from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Title} from '../Title/Title'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box'
import axios from "axios";




const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 50,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    gridList: {
        width: '100%',
        height: 540,
    },
    icon: {
        color: 'white',
        fontSize: 20,
        marginTop: 14,
    },
    arrowBox: {
        background:'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
        width: 45,
        height: 48,
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
    },
    titleBar: {
        background: 'rgba(54, 62, 99, 0.9)'
    },
    hover: {
        '&:hover':{
            '&::before': {
                content: "''",
                width: '100%',
                height: '100%',
                position:'absolute',
                background: 'rgba(0, 130, 67, 0.5)',
            }
        }
    },
    button: {
        textTransform: 'uppercase',
        background:'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
        color: 'white',
        borderRadius: 4,
        fontSize: 14,
        width: 204,
        height: 50,
    },
    link: {
        textDecoration: 'none'
    },
    box: {
        width: 'fit-content',
        position: 'relative',
        '&::before': {
            content:"''",
            position: 'absolute',
            width: 330,
            height: 2,
            top: 25,
            right: 220,
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            opacity: 0.5
        },
        '&::after': {
            content:"''",
            position: 'absolute',
            width: 330,
            height: 2,
            top: 25,
            left: 218,
            background: 'linear-gradient(180deg, #6686FF 0%, #8F8DE2 100%)',
            opacity: 0.5
        },
    },
}));

const tileData = [
     {
         img: 'img/categories/e-scooter.png',
         title: 'electric scooter',
         link: `/e-scooter`,
         cols: 2
     },
     {
         img: 'img/categories/e-bike.png',
         title: 'electric bike',
         link: '/e-bike',
         cols: 1
     },
     {
         img: 'img/categories/e-skateboard.png',
         title: 'electric skate',
         link: '/e-skateboard',
         cols: 1
     },
     {
         img: 'img/categories/e-unicycle.png',
         title: 'electric unicycle',
         link: '/e-unicycle',
         cols: 1
     },
     {
         img: 'img/categories/e-hoverboard.png',
         title: 'electric hoverboard',
         link: '/e-hoverboard',
         cols: 1
     },
 ];


export const CategoryImages = () => {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Title title="How do you ride?"/>
                <GridList cellHeight={266} className={classes.gridList} cols={3}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                            <Link to={tile.link} className={classes.hover}>
                                <div className={classes.img} style={{background: `rgb(0, 130, 67) url('${tile.img}')`}} />
                                <GridListTileBar
                                    className={classes.titleBar}
                                    title={tile.title.toUpperCase()}
                                    actionIcon={
                                        <div className={classes.arrowBox}>
                                            <ArrowForwardIcon className={classes.icon}/>
                                        </div>
                                    }
                                />
                            </Link>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
    );
};

export const Categories = () => {
    const classes = useStyles();

    return(
        <div>
            <CategoryImages/>
            <Box  mx='auto' mt='50px' className={classes.box}>
                <Link to='/catalog' className={classes.link}>
                    <Button className={classes.button}>shop all categories</Button>
                </Link>
            </Box>
        </div>
    )
};


export default Categories;