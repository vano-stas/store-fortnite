import React from 'react';
import StoreItem from '../store-item';


import './store-list.scss';

function StoreList ({ fetchItem, store, onToggleModal, loading }) {
    return (
        <div className='store-list'>
            <StoreItem
                fetchItem={fetchItem}
                onToggleModal={onToggleModal}
                store={store}
                loading={loading} />
        </div>
    )
};

export default StoreList;