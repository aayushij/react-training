import React from 'react';
import './../BurgerBuildControl/BurgerBuildControl.css';
import BurgerBuildControl from './../BurgerBuildControl/BurgerBuildControl';
import { BurgerIngredients } from './../../constants/BurgerIngredients';

const BuildControls = (props) => (
    <div className={"BuildControls"}>
        <p><strong>Total Price: {props.totalPrice ? props.totalPrice.toFixed(2) : props.totalPrice}</strong></p>
        {BurgerIngredients.map(element => (
            <BurgerBuildControl
                key={element.label}
                label={element.label}
                rate={element.rate}
                handleAdd={() => props.handleAdd(element.type, element.rate)}
                handleRemove={() => props.handleRemove(element.type, element.rate)}
                disabled = {props.disableding[element.type]}
            />
        ))}
        <button className='btn btn-success' disabled={props.totalPrice ? false : true} onClick={props.handleOrder}>
            Order Now!
        </button>
    </div>
)

export default BuildControls;
