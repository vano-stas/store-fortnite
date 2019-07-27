import React from 'react';

import './store-item-description.scss';

function StoreItemDescription({ modalState, onToggleModal, toggleClose }) {

    const { name, cost, description, image, isFeatured, isNew, ratings } = modalState;

    const descriptionText = description ? description : 'No description';
    const available = isFeatured
        ? <p className='text-success font-weight-bold'>Available</p>
        : <p className='text-danger font-weight-bold'>Under the order</p>;
    // const newItem = isNew ? (<div><p>New</p></div>) : '';
    
    const stopFun = (e) => {
        e.stopPropagation();
        console.log('work');
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
                        <p>{available}</p>
                    </div>
                    {/* {newItem} */}
                    <div className='cost'>
                        <p className='info-text'>Cost:</p>
                        <p>{cost}</p>
                    </div>
                    <div>
                        {/* <div class="rating">
                            <div class="stars">
                                <div class="on" style={{width: `88%`}}></div>
                                <div class="live">
                                    <span data-rate="1"></span>
                                    <span data-rate="2"></span>
                                    <span data-rate="3"></span>
                                    <span data-rate="4"></span>
                                    <span data-rate="5"></span>
                                </div>
                            </div>
                        </div> */}
                        <p className='info-text'>Rating:</p>
                        <p className='font-weight-bold'>{ratings.avgStars}</p>
                    </div>
                </div>
                <div className='close-button'>
                    <button type="button" class="close" aria-label="Close"
                        onClick={toggleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
            </div>
        </div>
    )

}

export default StoreItemDescription;