import React from 'react'
import classes from './Ingredient.css'

const Ingredient = (props) => {
	let ingredient = null

	switch (props.type) {
	case ('bread-bottom'):
		ingredient = <div className={classes.BreadBottom}></div>
		break
	case ('bread-top'):
		ingredient = 
            <div className={classes.BreadTop}>
            	<div className={classes.Seeds1}></div>
            	<div className={classes.Seeds2}></div>
            </div>
		break
	case ('bread-bottom'):
		ingredient = <div className={classes.BreadBottom}>Bottom Bread</div>
		break
	case ('meat'):
		ingredient = <div className={classes.Meat}>Meat</div>
		break
	case ('cheese'):
		ingredient = <div className={classes.Cheese}>Cheese</div>
		break
	case ('salad'):
		ingredient = <div className={classes.Salad}>Salad</div>
		break
	case ('bacon'):
		ingredient = <div className={classes.Bacon}>Bacon</div>
		break
	default:
		ingredient = <div>Only Burger Bun</div>
	}

	return ingredient
}

export default Ingredient