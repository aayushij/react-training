import React from 'react';

import './BurgerBuildControl.css';

const BurgerBuildControl = (props) => {
    console.log(props);
    return (
    <div className={'BuildControl'}>
        <div className={'Label'}>{props.label}</div>
        <div className={'Label'}>{props.rate}</div>
        <button
            className={'Less'}
            onClick={props.handleRemove}
            disabled={props.disabled}>-</button>
        <button
            className={'More'}
            onClick={props.handleAdd}>+</button>
    </div>
    );
}
export default BurgerBuildControl;