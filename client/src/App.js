import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Webstore from './components/Webstore/Webstore'

const axios = require('axios')

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        store_name: 'Town Market',
        store_slogan: 'Your Local Supermarket',
        plu_data: [],
        product_searched: false,
        searched_item: null,
        shopping_cart: [],
        show_shopping_cart: false,
        logged_in: false
    }

    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.addItemsToShoppingCart = this.addItemsToShoppingCart.bind(this);
    this.showShoppingCart = this.showShoppingCart.bind(this);
    this.hideShoppingCart = this.hideShoppingCart.bind(this);
    this.showSearchPopup = this.showSearchPopup.bind(this);
    this.hideSearchPopup = this.hideSearchPopup.bind(this);
}

componentDidMount()  {
  console.log('componentDidMount')
    fetch('/data/plu-data')
        .then(res => res.json())
        .then(plu_data => this.setState({plu_data}, () => console.log('data fetched..', plu_data)))
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

handleSearchClick = (e) => {

  e.preventDefault();
  //axios.get('/data/plu-data', { params: { itemCode: e.target[0].value }})

  axios.get('/data/plu-data', {
    params: {
      itemCode: e.target[0].value    }
  })


      .then((response) => {
        console.log(response)
      })
      .catch(error => console.log(error))
       //.then(res => res.json())
       //.then(plu_data => this.setState({plu_data}, () => console.log('data fetched..', plu_data)))
      
  this.setState({
    searched_item: e.target[0].value
  }, () => {
    console.log(this.state.searched_item)
  })

  //itemSearch.current.focus();  
  //  fetch('/data/search-by-item-code')
  //      .then(res => res.json())
  //      .then(plu_data => this.setState({plu_data}, () => console.log('data fetched..', plu_data)))
  console.log('function handleSearchClick')
  //console.log(this.state.searched_item)

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
                            pluData={this.state.plu_data} 
                            action={this.handleSearchClick} 
                            addToShoppingCart={this.addItemsToShoppingCart} 
                            showShoppingCart={this.state.show_shopping_cart} 
                            showShoppingCartAction={this.showShoppingCart} 
                            hideShoppingCartAction={this.hideShoppingCart} 
                            shoppingCartContents={this.state.shopping_cart} 
                            itemsInShoppingCart={this.state.shopping_cart.length}
                            productSearched={this.state.product_searched}
                            searchedItem={this.state.searched_item}
                            hideSearchPopup={this.hideSearchPopup}
                            loggedIn={this.state.logged_in}/>
                </Route>
                
              </Switch>
            </Router>
            </>
    )
  }
}

