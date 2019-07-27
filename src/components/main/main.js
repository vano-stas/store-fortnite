import React from 'react';
import StoreList from '../store-list';
import SearchPanel from '../search-panel';

import './main.scss';

function Main ({ fetchItem, store, onToggleModal, loading, onSearchChange, showError }) {
    return (
        <div className='main-app'>
            <SearchPanel onSearchChange={onSearchChange} />
            <StoreList
                fetchItem={fetchItem}
                onToggleModal={onToggleModal}
                store={store}
                loading={loading}
                showError={showError} />
        </div>
    )
};

export default Main;