import React from 'react';
import StoreItem from '../store-item';


import './store-list.scss';

function StoreList ({ fetchItem, store, onToggleModal, loading, showError }) {
    return (
        <div className='store-list'>
            <StoreItem
                fetchItem={fetchItem}
                onToggleModal={onToggleModal}
                store={store}
                loading={loading}
                showError={showError} />
        </div>
    )
};

export default StoreList;