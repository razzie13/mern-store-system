import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Webstore from './components/Webstore/Webstore'

//const axios = require('axios')

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        store_name: 'Town Market',
        store_slogan: 'Your Local Supermarket',
        plu_data_amount: null,
        product_searched: false,
        shopping_cart: [],
        show_shopping_cart: false,
        logged_in: false,
        searched_item: null
    }

    this.addItemsToShoppingCart = this.addItemsToShoppingCart.bind(this);
    this.showShoppingCart = this.showShoppingCart.bind(this);
    this.hideShoppingCart = this.hideShoppingCart.bind(this);
    this.showSearchPopup = this.showSearchPopup.bind(this);
    this.hideSearchPopup = this.hideSearchPopup.bind(this);
    this.searchSite = this.searchSite.bind(this);
    this.navigateSiteCategories = this.navigateSiteCategories.bind(this);
}

addItemsToShoppingCart = (e) => {
  e.preventDefault();
  console.log('addItemsToShoppingList')
  console.log(e)
  console.log(e.target[0].value + ' ' + e.target[1].value)

  let addedItem = {
      itemCode: e.target[1].value,
      amount: e.target[0].value
  }

  this.setState({
    shopping_cart: [...this.state.shopping_cart, addedItem]
  })
}

showShoppingCart = () => {
  console.log('showShoppingCart')
  this.setState({
    show_shopping_cart: true
  })
}

hideShoppingCart = () => {
  console.log('hideShoppingCart')
  this.setState({
    show_shopping_cart: false
  })  
}

showSearchPopup = () => {
  console.log('showSearchPopup')
  this.setState({
    product_searched: true
  })  
}

hideSearchPopup = () => {
  console.log('hideSearchPopup')
  this.setState({
    product_searched: false,
    searched_item: null
  })  
}

navigateSiteCategories = e => {
  e.preventDefault()
  console.log(e)
  console.log(e.target.value)
  console.log('navigateSiteCategories')
  fetch('/data/search/?itemDepartment=' + e.target.value)
      .then(res => res.json())
      .then(data => console.log(data))
}

searchSite = e => {
  e.preventDefault()
  console.log(e.target[0].value)
  console.log('searchSite')
  fetch('/data/search/?itemCode=' + e.target[0].value)
      .then(res => res.json())
      //.then(data => console.log(data))
      .then(data => this.setState({ searched_item: e.target[0].value }, () => console.log(data)) )
     
  this.showSearchPopup()
}

render() {
    
    return (
      <>
            <Router>
              <Switch>
                <Route path="/">
                  <Webstore storeName={this.state.store_name} 
                            storeSlogan={this.state.store_slogan} 
                            pluData={this.state.plu_data_amount} 
                            action={this.searchSite} 
                            addToShoppingCart={this.addItemsToShoppingCart} 
                            showShoppingCart={this.state.show_shopping_cart} 
                            showShoppingCartAction={this.showShoppingCart} 
                            hideShoppingCartAction={this.hideShoppingCart} 
                            shoppingCartContents={this.state.shopping_cart} 
                            itemsInShoppingCart={this.state.shopping_cart.length}
                            productSearched={this.state.product_searched}
                            searchedItem={this.state.searched_item}
                            hideSearchPopup={this.hideSearchPopup}
                            loggedIn={this.state.logged_in}
                            siteNavigation={this.navigateSiteCategories}/>
                </Route>
                
              </Switch>
            </Router>
            </>
    )
  }
}

