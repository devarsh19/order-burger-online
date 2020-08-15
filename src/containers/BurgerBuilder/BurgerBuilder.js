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
    const [state, setState] = useState(initialState)
    const [error, setError] = useState('')
    
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
        
    
    const specialBurger = () => {
        setState(
            {
                ...state,
                ingredients: specialBurgerIngredients,
                price: 12
            }
        )
    }

    const addIngredientHandler = (type) => {
        setError('')
        const updatedState = {
            ...state
        }
        if (updatedState.ingredients[type].qty > 2) {
            setError(`It won't taste good by exceeding ${type} in the burger beyond this. (trust us)`)
            return false
        }
        updatedState.ingredients[type].qty += 1; 
        updatedState.price = updatedState.price + updatedState.ingredients[type].price
        console.log(updatedState)
        setState({
            ...updatedState
        });
    }

    const removeIngredientHandler = (type) => {
        setError('')
        const updatedState = {
            ...state
        }

        if (updatedState.ingredients[type].qty < 1) {
            setError(`You can't eat bun only. Infact we want you to eat healthy burger.`)
            return false
        }
        
        updatedState.ingredients[type].qty -= 1; 
        updatedState.price -= updatedState.ingredients[type].price
        setState({
            ...updatedState
        });
    }

    return (
        <Aux>
            <div>
                <Button variant="contained" color="primary"
                    onClick={specialBurger}>
                    Chefs's special Burger
                </Button>
                <h3>Total: {state.price}</h3>
            </div>
            {error ? <p style={{color: 'black'}}>{error}</p> : null} 
            <br />

            <BuildControls
                allIngredients={state.ingredients}
                addIngredient={addIngredientHandler}
                removeIngredient={removeIngredientHandler}
            />
            <Burger ingredients={state.ingredients}/>
        </Aux>
    );
};

export default BurgerBuilder;