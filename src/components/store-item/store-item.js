import React, { useEffect } from 'react';
import Spinner from '../spinner';

import './store-item.scss';

function StoreItem ({ fetchItem, store, onToggleModal, loading, showError }) {

    useEffect(() => {
        fetchItem()
    }, []);

    const load = loading ? <Spinner /> : null;

    const notFound = (!loading && (store.length === 0) && !showError) ? <p className='text-white font-weight-bold'>Not found</p>  : null;

    const visibleStore = (!loading && (store.length === 0))
    ? null
    : store.map(item => (
            <div className='store-item-cart shadow p-3 mb-5 bg-white rounded'
              key={item.itemId}
              onClick={() => {onToggleModal(item.itemId)}}>
                <img src={item.image} alt='foto'></img>
                <h5 className='text-primary'>{item.name}</h5>
                <p>Cost: {item.cost}</p>                
            </div>
        ))
    
    return (
        <div className='store-wrapper'>
            {load}
            {notFound}
            {showError}
            <div className='store-item'>
                {visibleStore}
            </div>
        </div>
    )
};

export default StoreItem;