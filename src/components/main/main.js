import React from 'react';
import StoreList from '../store-list';
import SearchPanel from '../search-panel';

import './main.scss';

function Main ({ fetchItem, store, onToggleModal, loading, onSearchChange }) {
    return (
        <div className='main-app'>
            <SearchPanel onSearchChange={onSearchChange} />
            <StoreList
                fetchItem={fetchItem}
                onToggleModal={onToggleModal}
                store={store}
                loading={loading} />
        </div>
    )
};

export default Main;