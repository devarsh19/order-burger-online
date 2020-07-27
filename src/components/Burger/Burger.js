import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredients/Ingredient';

const Burger = (props) => {
    const ingredientsNameArray = Object.keys(props.ingredients)
    const ingredientsComponents = ingredientsNameArray.length > 0
    ?
    ingredientsNameArray.map( (name, i) => {
        return [...Array(props.ingredients[name].qty)]
        .map( (entity, i) => {
            return <Ingredient key={i} type={name} />
        })
        
    })
    :
    <p>Add your favourite ingredients and kill your hunger</p>;

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
                {ingredientsComponents}  
            <Ingredient type="bread-bottom" />

            {/* <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80" alt="burger"/> */}
        </div>
    );
};

export default Burger;