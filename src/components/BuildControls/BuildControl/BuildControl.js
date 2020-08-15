import React from 'react';
import Aux from '../../../hoc/Auxilary'
import Button from '@material-ui/core/Button'
import classes from './BuildControl.css'
import { capitalizeFirst } from '../../../utils';

const BuildControl = ({ingredientName, addIngredient, removeIngredient}) => {
    return (
        <div className={classes.BuildControl}>
            <Button className={classes.Less} onClick={() => removeIngredient(ingredientName)}>Less</Button>
            <div className={classes.Label}>{capitalizeFirst(ingredientName)}</div>
            <Button className={classes.More} onClick={() => addIngredient(ingredientName)}>More</Button>
        </div>
    );
};

export default BuildControl;