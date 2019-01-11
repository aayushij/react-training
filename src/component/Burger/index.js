import React, { Component } from 'react';
import BurgerIngredients from './BurgerIngredient'
import PropTypes from 'prop-types';

class Burger extends Component {
    render(){
        let transformedIngredients = Object.keys(this.props.ingredients) 
            .map(ing => {  
                return [...Array(this.props.ingredients[ing])].map((_, i) => {
                    return <BurgerIngredients key={ing + i} type={ing} />; 
                });
            })
            .reduce((arr, el) => { 
                return arr.concat(el);
            }, [] //initial value
            );
        if (transformedIngredients.length === 0) {
            transformedIngredients = <p className="">Please add some ingredients!</p>
        }
        console.log(this.props.ingredients);
        return(
            <div className="Burger">
                <BurgerIngredients type="breadTop"/>
                {transformedIngredients}
                <BurgerIngredients type="breadBottom"/>
            </div>
        )
    }
}

Burger.propTypes = {
    ingredients: PropTypes.object
};

export default Burger;