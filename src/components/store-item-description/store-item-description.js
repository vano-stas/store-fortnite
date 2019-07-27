import React, { useEffect } from 'react';
import CartButton from '../cart-button';

import './store-item-description.scss';

function StoreItemDescription({ modalState, onToggleModal, toggleClose, onCounterChange, increment, decrement, counter, addToCart, setCounter }) {

    useEffect(() => {
        setCounter(0);
    }, [setCounter]);

    const { name, cost, description, image, isFeatured, ratings } = modalState;

    const descriptionText = description ? description : 'No description';
    const available = isFeatured
        ? <p className='text-success font-weight-bold'>Available</p>
        : <p className='text-danger font-weight-bold'>Under the order</p>;
        
    const stopFun = (e) => {
        e.stopPropagation();   
    }

    return (
        <div className='modal-wrapper' onClick={onToggleModal}>
            <div className='store-modal' onClick={stopFun}>
                <div className='image-full'>
                    <img src={image} alt='' />
                </div>
                <div className='cart-info'>
                    <h2 className='name text-primary'>
                        {name}
                    </h2>
                    <div className='description'>
                        <p className='info-text'>Description:</p>
                        <p>{descriptionText}</p>
                    </div>

                    <div>
                        <p className='info-text'>Availability:</p>
                        <div>{available}</div>
                    </div>
                    <div className='cost'>
                        <p className='info-text'>Cost:</p>
                        <p>{cost}</p>
                    </div>
                    <div className='rating'>
                        <p className='info-text'>Rating:</p>
                        <p className='font-weight-bold'>{ratings.avgStars}</p>
                    </div>
                    <CartButton 
                        onCounterChange={onCounterChange}
                        increment={increment}
                        decrement={decrement}
                        counter={counter}
                        addToCart={addToCart} />
                </div>
                <div className='close-button'>
                    <button type="button" className="close" aria-label="Close"
                        onClick={toggleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
            </div>
        </div>
    )
}

export default StoreItemDescription;