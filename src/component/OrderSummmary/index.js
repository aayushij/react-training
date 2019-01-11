import React from 'react';

const OrderSummary = (props) => {
    const items = Object.keys(props.ingredients).map(itemName => (
        <li key={itemName}>{itemName}: {props.ingredients[itemName]}</li>
    ));

    return(
        <>
            <p>You have selected the following items for the burger filling</p>
            <ul>{items}</ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <button className='btn btn-success' onClick={props.checkout}>Checkout</button>
            <button className='btn btn-danger' onClick={props.close}>Cancel</button>
        </>
    )
}

export default OrderSummary;
