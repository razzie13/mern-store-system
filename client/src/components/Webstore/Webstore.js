import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Webstore/Header/Header'
import Footer from '../Webstore/Footer/Footer'

import Main from './WebstoreMain/WebstoreMain'
import Department from './WebstoreDepartment/WebstoreDepartment'

import ShoppingCart from './WebstoreShoppingCart/WebstoreShoppingCart'
import SearchPopup from './WebstoreSearchPopup/WebstoreSearchPopup'

export default function Webstore(props) {

    return (
        <>
            <Header storeName={props.storeName} 
                    storeSlogan={props.storeSlogan} 
                    numberOfItems={props.pluData.length} 
                    action={props.action} 
                    totalItemsInCart={props.itemsInShoppingCart}  
                    showShoppingCartAction={props.showShoppingCartAction} 
                    loggedIn={props.loggedIn}/>
            <main>
            {props.productSearched ? <SearchPopup searchedItem={props.searchedItem} hideSearchPopup={props.hideSearchPopup}/> : null}
            {props.showShoppingCart ? <ShoppingCart shoppingCartContents={props.shoppingCartContents} hideShoppingCartAction={props.hideShoppingCartAction}/> : null}
                <Router>
                    <Switch>
                        <Route path="/produce"><Department id="Produce" pluData={props.pluData} addToShoppingCart={props.addToShoppingCart} /></Route>
                        <Route path="/meat"><Department id="Meat" pluData={props.pluData} addToShoppingCart={props.addToShoppingCart} /></Route>
                        <Route path="/grocery"><Department id="Grocery" pluData={props.pluData} addToShoppingCart={props.addToShoppingCart} /></Route>
                        <Route path="/bulk"><Department id="Bulk" pluData={props.pluData} addToShoppingCart={props.addToShoppingCart} /></Route>
                        <Route path="/" exact><Main pluData={props.pluData} addToShoppingCart={props.addToShoppingCart} /></Route>
                    </Switch>
                </Router>
            </main>
            
            <Footer />
        </>
    )
}
