import React, {useEffect, useState} from "react";
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
import axios from 'axios';

import Preloader from "../Preloader/Preloader";

const useStyles = makeStyles(theme => ({
    root: {
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
        backgroundRepeat: 'no-repeat'
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
    spaces: {
        marginTop: 50,
        marginBottom: 50,
    }
}));

export const CategoryImages = () => {
    const classes = useStyles();
    let categoryBlocks;
    const [categoryLink, setCategoryLink] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            await axios.get("/catalog")
                .then(catalog => {
                    setCategoryLink(catalog.data);
                    setLoading(false);
                })
                .catch(err => {
                   console.log(err)
                });
            }
        getData()
    }, []);

    if (categoryLink && !loading) {
        categoryBlocks = categoryLink.map((tile) => {
            return (
                <GridListTile key={tile._id} cols={+tile.cols || 1}>
                    <Link to={`/${tile.id}`} className={classes.hover}>
                        <div className={classes.img} style={{background: `rgb(0, 130, 67) url('${tile.imgUrl}')`}}/>
                        <GridListTileBar
                            className={classes.titleBar}
                            title={tile.name.toUpperCase()}
                            actionIcon={
                                <div className={classes.arrowBox}>
                                    <ArrowForwardIcon className={classes.icon}/>
                                </div>
                                }
                        />
                    </Link>
                </GridListTile>
            )
        });
    } else if(loading) {
        return <Preloader/>
    }

    return (
        <div className={classes.root}>
            <GridList cellHeight={266} className={classes.gridList} cols={3}>
                {categoryBlocks}
            </GridList>
        </div>
    )
};

export const Categories = () => {
    const classes = useStyles();

    return(
        <div className={classes.spaces}>
            <Container maxWidth='md'>
                <Title title="How do you ride?" />
                <CategoryImages/>
            <Box  mx='auto' mt='50px' className={classes.box}>
                <Link to='/products' className={classes.link}>
                    <Button className={classes.button}>shop all categories</Button>
                </Link>
            </Box>
            </Container>
        </div>
    )
};

export default Categories;