import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tungsten from '../../fonts/Tungsten-Book.woff';

const tungsten = {
    fontFamily: 'Tungsten Book',
    fontStyle: 'normal',
    src: `
    local('Tungsten Book'),
    url(${Tungsten}) format('woff')
  `,
};

const useStyles = makeStyles(theme => ({
    subsectionTitle: {
        fontSize: '33px',
        fontWeight: '326',
        textTransform: 'capitalize',
        marginBottom: '20px',
        color: props => props.color
    },

}));

const SubsectionTitle = (props) => {
    const classes = useStyles(props);

    return (
        <Typography align='center' style={tungsten} variant="h3"  className={classes.subsectionTitle} >
            {props.title}
        </Typography>
    );
};

export default SubsectionTitle;