import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from '../header';
import Main from '../main';
import HomePage from '../home-page';
import ErrorIndicator from '../error-indicator';

import './app.scss';
import StoreItemDescription from '../store-item-description';

function App () {

    const [store, setStore] = useState([]);
    const [showStoreModal, setShowStoreModal] = useState(false);
    const [modalState, setModalState] = useState([]);
    const [term, setTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const [counterAll, setCounterAll] = useState(0);
    const [hasError, setHasError] = useState(false);

    const fetchItem = async () => {
        try {
            const data = await fetch('https://fortnite-api.theapinetwork.com/store/get', {
                headers: {'Authorization': '33e8190c766f0c01c3a16b38bc8edac4',
            }});
            if (!data.ok) {
                throw new Error(data.status);
            }

            const res = await data.json();
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
            });
            setStore([...storeSt]);
            setLoading(false);
        } catch(err) {
            console.log(err);
            setLoading(!loading);
            setHasError(true);
        }
    }

    const onToggleModal = (e) => {
        const item = store.filter(elem => {
            return elem.itemId === e;
        });
        setModalState(item[0]);
        setShowStoreModal(!showStoreModal);
    }

    const toggleClose = () => {
        setShowStoreModal(!showStoreModal);
        setCounter(0);
    }

    // const stopFun = (e) => {
    //     setCounter(0);
    //     e.stopPropagation();   
    // }

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
    }

    const onCounterChange = (e) => {
        setCounter(+e.target.value + counter);
    }

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter >0) {
            setCounter(counter - 1);
        } else {
            setCounter(0)
        }
    }

    const addToCart = () => {
        setCounterAll(counterAll + counter);
        setShowStoreModal(!showStoreModal);
        setCounter(0);
    }

    const storeModal = showStoreModal
    ? ReactDOM.createPortal( <StoreItemDescription 
        onToggleModal={onToggleModal}
        modalState={modalState}
        toggleClose={toggleClose}
        onCounterChange={onCounterChange}
        increment={increment}
        decrement={decrement}
        counter={counter}
        addToCart={addToCart}
        setCounter={setCounter} />,
        document.getElementById('modal'))
    : null;

    const visibleItems = search(store, term);

    const showError = hasError ? <ErrorIndicator /> : null;


    return (
        <Router>
            <div className='app'>
                <Header counterAll={counterAll}  />

                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/store' render={(props) => (
                        <Main fetchItem={fetchItem}
                        onToggleModal={onToggleModal}
                        onSearchChange={onSearchChange}
                        store={visibleItems}
                        loading={loading}
                        showError={showError} />
                    )}/>
                </Switch>
                {storeModal}
            </div>
        </Router>
    )
};

export default App;