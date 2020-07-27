// import React, { Component } from 'react';
import React, { useState } from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Button from '@material-ui/core/Button'

const BurgerBuilder = () => {
    const defaultIngredients = [
        {
            "name": "bread-top",
            "price": 0,
        },
        {
            "name": "bread-bottom",
            "price": 0,
        },
    ]
    const ingredientsData = [
        {
            "name": "bread-top",
            "price": 0,
        },
        {
            "name": "salad",
            "price": 1,
        },
        {
            "name": "bacon",
            "price": 1,
        },
        {
            "name": "cheese",
            "price": 1,
        },
        {
            "name": "meat",
            "price": 1,
        },
        {
            "name": "bread-bottom",
            "price": 0,
        },
    ]
    const [ingredients, setIngredients] = useState(defaultIngredients)
    
    const resetBurger = () => {
        setIngredients(defaultIngredients)
    }

    const specialBurger = () => {
        setIngredients(ingredientsData)
    }
    return (
        <Aux>
            <h3>Burger</h3>
            <Burger ingredients={ingredients}/>
            <Button variant="contained" color="secondary" onClick={resetBurger}>Reset</Button>
            <Button variant="contained" color="primary" onClick={specialBurger}>Chefs's special Burger</Button>

        </Aux>
    );
};

export default BurgerBuilder;