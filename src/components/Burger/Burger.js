import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredients/Ingredient';

const Burger = () => {
    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            <Ingredient type="salad" />
            <Ingredient type="cheese" />
            <Ingredient type="meat" />
            <Ingredient type="bread-bottom" />

            {/* <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80" alt="burger"/> */}
        </div>
    );
};

export default Burger;