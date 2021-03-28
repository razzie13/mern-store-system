import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Webstore from './components/Webstore/Webstore'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        store_name: 'Town Market',
        store_slogan: 'Your Local Supermarket',
        plu_data: []
    }
}

componentDidMount()  {
  console.log('componentDidMount')
    fetch('/data/plu-data')
        .then(res => res.json())
        .then(plu_data => this.setState({plu_data}, () => console.log('data fetched..', plu_data)))
        console.log(this.state)
}
  


  render() {
    
    return (
      <>
            <Router>
              <Switch>
                <Route path="/">
                  <Webstore storeName={this.state.store_name} storeSlogan={this.state.store_slogan} pluData={this.state.plu_data} />
                </Route>
                
              </Switch>
            </Router>



            <div>
                <h2>PLU DataSet</h2>
                <ul>
                    {this.state.plu_data.map(item =>
                        <li key={item.itemCode}>{item.itemCode} {item.itemDescription} {item.itemType}</li>    
                    )}
                </ul>
            </div>
            </>
    )
  }
}

