import React from 'react';

import './cart-page.scss';

function CartPage ({ storeCart }) {

    return (
        <div className='cart-page-wrapper'>
            <div className='cart-page-content'>
                <h4>Cart page</h4>
                <div className='cart-list'>     
                    { storeCart
                        .filter( item => item.inCart === true )
                        .map( (item) => {
                            return (
                                <div className="cart-item" key={item.itemId}>
                                    <img src={item.image} alt="foto"/>
                                    <div className='cart-item-text'>
                                        <h5>{item.name}</h5>
                                        <span>Cost: {item.cost}</span>
                                    </div>
                                    <div className='cart-item-total'>
                                        <p>Total count: {item.count}</p>
                                        <p>Total cost: {item.cost*item.count}</p>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            </div>
        </div>
    )
}

export default CartPage;