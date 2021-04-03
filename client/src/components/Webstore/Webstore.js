import React, { Component } from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Webstore/Header/Header'
import Footer from '../Webstore/Footer/Footer'

import Main from './WebstoreMain/WebstoreMain'
import Department from './WebstoreDepartment/WebstoreDepartment'

import ShoppingCart from './WebstoreShoppingCart/WebstoreShoppingCart'
import SearchPopup from './WebstoreSearchPopup/WebstoreSearchPopup'


export default class Webstore extends Component {

    componentDidMount()  {
        console.log('componentDidMount Webstore.js')
          fetch('/data/plu-data')
              .then(res => res.json())
              .then(data => console.log('data fetched..', data))     
      }

    render() {

        return (
            <>
                <Header storeName={this.props.storeName} 
                        storeSlogan={this.props.storeSlogan} 
                        numberOfItems={this.props.pluData} 
                        action={this.props.action} 
                        totalItemsInCart={this.props.itemsInShoppingCart}  
                        showShoppingCartAction={this.props.showShoppingCartAction} 
                        loggedIn={this.props.loggedIn}
                        siteNavigation={this.props.siteNavigation}/>
                <main>
                {this.props.productSearched ? <SearchPopup searchedItem={this.props.searchedItem} hideSearchPopup={this.props.hideSearchPopup} pluData={this.props.pluData}/> : null}
                {this.props.showShoppingCart ? <ShoppingCart shoppingCartContents={this.props.shoppingCartContents} hideShoppingCartAction={this.props.hideShoppingCartAction}/> : null}
                <Department pluData={this.props.currentData} currentDepartment={this.props.currentDepartment} addToShoppingCart={this.props.addToShoppingCart} />
                    {/* <Router>
                        <Switch>
                            <Route exact path="/produce"><Department id="Produce" pluData={this.props.pluData} addToShoppingCart={this.props.addToShoppingCart} /></Route>
                            <Route exact path="/meat"><Department id="Meat" pluData={this.props.pluData} addToShoppingCart={this.props.addToShoppingCart} /></Route>
                            <Route exact path="/grocery"><Department id="Grocery" pluData={this.props.pluData} addToShoppingCart={this.props.addToShoppingCart} /></Route>
                            <Route exact path="/bulk"><Department id="Bulk" pluData={this.props.pluData} addToShoppingCart={this.props.addToShoppingCart} /></Route>
                            <Route exact path="/"><Main pluData={this.props.pluData} addToShoppingCart={this.props.addToShoppingCart} /></Route>
                        </Switch>
                    </Router> */}
                </main>
                
                <Footer />
            </>
        )
    }
}
