import React from 'react';
import Aux from '../../../hoc/Auxilary'
import Button from '@material-ui/core/Button'
import classes from './BuildControl.css'

const BuildControl = ({ingredientName, key}) => {
    return (
        <div className={classes.BuildControl}>
            <Button className={classes.Less}>Less</Button>
            <div className={classes.Label}>{ingredientName}</div>
            <Button className={classes.More}>More</Button>
        </div>
        // <Aux>
        //     <p key={key} className={classes.Label}> <Button size="small" variant="contained" color="primary">Add</Button> {ingredientName} <Button size="small"  variant="contained" color="secondary">Remove</Button></p>
        // </Aux>
    );
};

export default BuildControl;