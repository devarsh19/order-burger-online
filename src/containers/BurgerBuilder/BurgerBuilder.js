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
            </Aux>
        );
    }
}

export default BurgerBuilder;