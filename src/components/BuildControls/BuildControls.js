import React from 'react';
import Button from '@material-ui/core/Button'
import classes from './BuildControls.css'

const BuildControls = ({allIngredients}) => {
    const ingredientsArray = Object.keys(allIngredients)
    console.log(ingredientsArray)
    return (
        <div>
            <ul>
                {ingredientsArray.map( (item,i) => {
                    return <li key={i} className={classes.controlsList}> <Button size="small" variant="contained" color="primary">Add</Button> {item} <Button size="small"  variant="contained" color="secondary">Remove</Button></li>
                })}
            </ul>
        </div>
    );
};

export default BuildControls;