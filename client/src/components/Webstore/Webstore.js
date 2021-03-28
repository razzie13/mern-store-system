import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../Webstore/Header/Header'
import Footer from '../Webstore/Footer/Footer'

import Department from './WebstoreDepartment/WebstoreDepartment'


export default function Webstore(props) {
    return (
        <>
            <Header storeName={props.storeName} storeSlogan={props.storeSlogan}/>
            <Router>
                <Switch>
                    <Route path="/produce"><Department id="produce" pluData={props.pluData} /></Route>
                    <Route path="/meat"><Department id="meat" pluData={props.pluData} /></Route>
                    <Route path="/grocery"><Department id="grocery" pluData={props.pluData} /></Route>
                    <Route path="/bulk"><Department id="bulk" pluData={props.pluData} /></Route>
                </Switch>
            </Router>
            
            
            <Footer />
        </>
    )
}
