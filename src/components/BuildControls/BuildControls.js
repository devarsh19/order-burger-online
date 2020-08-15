import React from 'react';
import Button from '@material-ui/core/Button'
import Aux from '../../hoc/Auxilary'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = ({ allIngredients, addIngredient, removeIngredient }) => {
    const ingredientsArray = Object.keys(allIngredients)

    return (
        <div className={classes.Wrapper}>
            <h4>Choose your favourite ingredients</h4>
            <div className={classes.BuildControls}>
                {ingredientsArray.map( (item,i) => {
                    return <BuildControl
                        key={i}
                        ingredientName={item}
                        addIngredient={addIngredient}
                        removeIngredient={removeIngredient}
                    />
                })}
            </div>
        </div>
    );
};

export default BuildControls;