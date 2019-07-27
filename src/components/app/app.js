import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../header';
import Main from '../main';
import HomePage from '../home-page';

import './app.scss';
import StoreItemDescription from '../store-item-description';

function App () {

    // useEffect(() => {
    //     fetchItem()
    // }, []);

//    const initState = [{
//        name: '',
//        itemId: '',
//        cost: '',
//        image: '',
//        description: '',
//        isFeatured: '',
//        rating: '',
//        isNew: ''
//    }]

    const [store, setStore] = useState([]);
    const [showStoreModal, setShowStoreModal] = useState(false);
    const [modalState, setModalState] = useState([]);
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchItem = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get', {
            headers: {'Authorization': '33e8190c766f0c01c3a16b38bc8edac4',
        }});

        const res = await data.json();
        // console.log(res.data);
        // const storeSt = res.data.map((item) => {
        //     return ({
        //         name: item.item.name,
        //         itemId: item.itemId,
        //         cost: item.store.cost,
        //         image: item.item.images.background,
        //         description: item.item.description,
        //         isFeatured: item.store.isFeatured,
        //         isNew: item.store.isNew
        //     })
        // });
        const storeSt = [];
        res.data.map((item, i) => {(
            storeSt[i] = {
                name: item.item.name,
                itemId: item.itemId,
                cost: item.store.cost,
                image: item.item.images.background,
                description: item.item.description,
                isFeatured: item.store.isFeatured,
                isNew: item.store.isNew,
                ratings: item.item.ratings
            })
        })
        setStore([...storeSt]);
        setLoading(false);
    }

    const onToggleModal = (e) => {
        // console.log(e);
        const item = store.filter(elem => {
            return elem.itemId === e;
        });
        // console.log(item[0]);
        setModalState(item[0]);
        setShowStoreModal(!showStoreModal);
    }

    const toggleClose = () => {
        setShowStoreModal(!showStoreModal);
    }

    const onSearchChange = (e) => {
        setTerm(e.target.value);
    }

    const search = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter( (item) => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
        // if (vis.length  === 0 ) {
        //     return [];
        // } else return vis;
    }

    // const storeModal = showStoreModal ? <StoreItemDescription /> : null;

    const storeModal = showStoreModal
    ? ReactDOM.createPortal( <StoreItemDescription 
        onToggleModal={onToggleModal}
        modalState={modalState}
        toggleClose={toggleClose}
         />,
        document.getElementById('modal'))
    : null;

    const visibleItems = search(store, term);


    return (
        <Router>
            <div className='app'>
                <Header  />

                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/store' render={(props) => (
                        <Main fetchItem={fetchItem}
                        onToggleModal={onToggleModal}
                        onSearchChange={onSearchChange}
                        store={visibleItems}
                        loading={loading} />
                    )}/>
                    {/* <Route path='/store' component={Main} /> */}
                </Switch>

                {/* <HomePage />
                <Main
                    fetchItem={fetchItem}
                    onToggleModal={onToggleModal}
                    onSearchChange={onSearchChange}
                    store={visibleItems}
                    loading={loading} />
                 */}
                 {storeModal}
            </div>
        </Router>
    )
};

export default App;