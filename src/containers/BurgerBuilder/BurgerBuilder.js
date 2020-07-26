import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger';
import Ingredient from '../../components/Burger/Ingredients/Ingredient';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Aux>
               <h3>Burger</h3>
               <Burger />
               <h5>Choose ingredients</h5> 
               <Ingredient type="bread-top"/>
            </Aux>
        );
    }
}

export default BurgerBuilder;