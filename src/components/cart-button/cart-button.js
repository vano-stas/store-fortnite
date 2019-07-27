import React from 'react';

import './cart-button.scss';

const CartButton = ({ onCounterChange, increment, decrement, counter, addToCart }) => {

    return (
        <div className="cart-button">
		    <div className='counter'>
                <button className='btn btn-secondary'
                onClick={decrement}>-</button>
                <input className='form-control' type="text" value={counter}
                onChange={onCounterChange} />
                <button className='btn btn-secondary'
                onClick={increment}>+</button>
            </div>
            <div className='add-button'>
                <button className='btn btn-danger p-0 m-0'
                    onClick={addToCart}><i className="fa fa-cart-plus p-0 m-0"></i></button>
            </div>
		</div>
    )
}

export default CartButton;