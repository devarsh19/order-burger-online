// import React, { Component } from 'react';
import React, { useState } from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Button from '@material-ui/core/Button'
import BuildControls from '../../components/BuildControls/BuildControls'

const BurgerBuilder = () => {
    const initialState = {
        ingredients: {
            salad: {
                qty: 1,
                price: 1,
            },
            bacon: {
                qty: 1,
                price: 1,
            },
            cheese: {
                qty: 1,
                price: 1,
            },
            meat: {
                qty: 1,
                price: 1,
            },
        },
        price: 8.00,
    }
    
    const specialBurgerIngredients = {
        salad: {
            qty: 1,
            price: 1,
        },
        bacon: {
            qty: 1,
            price: 1,
        },
        cheese: {
            qty: 2,
            price: 1,
        },
        meat: {
            qty: 2,
            price: 1,
        }
    }
        
    const [state, setState] = useState(initialState)
    
    const specialBurger = () => {
        setState(
            {
                ...state,
                ingredients: specialBurgerIngredients,
                price: 12
            }
        )
    }

    return (
        <Aux>
            <div>
                <Button variant="contained" color="primary" onClick={specialBurger}>Chefs's special Burger</Button>
                <h3>Total: {state.price}</h3>
            </div>
            <br />
			<BuildControls allIngredients={state.ingredients}/>
            <Burger ingredients={state.ingredients}/>
        </Aux>
    );
};

export default BurgerBuilder;