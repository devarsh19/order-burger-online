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
            }
        },
        price: 0,
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
    
    const resetBurger = () => {
        setState(
            {
                ...state,
                ingredients: {}
            }
        )
    }

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
            <h3>Burger</h3>
            <Burger ingredients={state.ingredients}/>
            <Button variant="contained" color="secondary" onClick={resetBurger}>Reset</Button>
            <Button variant="contained" color="primary" onClick={specialBurger}>Chefs's special Burger</Button>
			
			<BuildControls allIngredients={state.ingredients}/>
        </Aux>
    );
};

export default BurgerBuilder;