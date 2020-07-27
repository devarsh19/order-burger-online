import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredients/Ingredient';

const Burger = (props) => {
    const ingredientsComponent = props.ingredients.length > 0
    ?
    props.ingredients.map( (ingredient, i) => {
        return <Ingredient key={i} type={ingredient.name} />
    })
    :
    null;

    const chefsAdvice = props.ingredients.length < 3
    ?
    <div> Add your favourite ingredients and kill your hunger </div>
    :
    null; 

    return (
        <div className={classes.Burger}>
            {ingredientsComponent}

            {chefsAdvice}
            {/* <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80" alt="burger"/> */}
        </div>
    );
};

export default Burger;