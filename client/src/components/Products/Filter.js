import React, {Component, useEffect, useState} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import axios from "axios";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    greyBg:{
        backgroundColor: '#FAFAFA',
        position: 'relative',
    },
    filterBtn:{
        background: '#F5F5F5',
        color: '#444444',
        width: '94px',
        textTransform: 'capitalize',
        fontSize: '14px',
        padding: '13px 20px',
        display: 'flex',
        alignItems: 'center',
        '&:after':{
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


}));
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];
const Filter = () => {
    const classes = useStyles();
    const [filter, setFilter]= useState([]);
    console.log('filter: ',filter);
    const handleChange = event => {
        setFilter(event.target.value);
    };

    const handleChangeMultiple = event => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setFilter(value);
    };
    useEffect(()=> {
        async function getFilters(){
            await axios.get("/filters").then(data => {
                console.log('data',data)
            })
                .catch(err=>{console.log(err)})

        }
        getFilters()
    },[]);
    return (
        <React.Fragment>
            <div className={classes.root}>
                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox">Color</InputLabel>
                    <Select
                        multiple
                        value={["red"]}
                        onChange={handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                {/*<Checkbox checked={color.indexOf(name) > -1} />*/}
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>


        </React.Fragment>
    );
};

export default Filter;
