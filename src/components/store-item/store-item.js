import React, { useEffect } from 'react';
import Spinner from '../spinner/spinner';

import './store-item.scss';

function StoreItem ({ fetchItem, store, onToggleModal, loading }) {

    // const fetchItem = async () => {
    //     const data = await fetch('https://fortnite-api.theapinetwork.com/store/get', {
    //         headers: {'Authorization': '33e8190c766f0c01c3a16b38bc8edac4',
    //     }});

    //     const res = await data.json();
    //     console.log(res);
    // }

    useEffect(() => {
        fetchItem()
    }, []);

    const load = loading ? <Spinner /> : null;

    const notFound = (!loading && (store.length === 0)) ? <p>Not found</p>  : null;

    const visibleStore = (!loading && (store.length === 0))
    ? null
    : store.map(item => (
            <div className='store-item-cart shadow p-3 mb-5 bg-white rounded'
              key={item.itemId}
              onClick={() => {onToggleModal(item.itemId)}}>
                <img src={item.image}></img>
                <h5 className='text-primary'>{item.name}</h5>
                <p>Cost: {item.cost}</p>
                {/* <div className='image' style={{background: `url(${item.image}) no-repeat`}}></div> */}
                
            </div>
        ))
    
    
    // const visibleStore = store.length > 0 
    // ? store.map(item => (
    //     <div className='store-item-cart shadow   p-3 mb-5 bg-white rounded'
    //       key={item.itemId}
    //       onClick={() => {onToggleModal(item.itemId)}}>
    //         <img src={item.image}></img>
    //         <h5 className='text-primary'>{item.name}</h5>
    //         <p>Cost: {item.cost}</p>
    //         {/* <div className='image' style={{background: `url(${item.image}) no-repeat`}}></div> */}
            
    //     </div>
    // ))
    // : <p>Not find</p>
 


    return (
        <div className='store-wrapper'>
            {load}
            {notFound}
            {/* <Spinner /> */}
            <div className='store-item'>
                {visibleStore}
            </div>
        </div>
    )
};

export default StoreItem;