import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Webstore/Header/Header'
import Footer from '../Webstore/Footer/Footer'

import Main from './WebstoreMain/WebstoreMain'
import Department from './WebstoreDepartment/WebstoreDepartment'


export default function Webstore(props) {
    
    return (
        <>
            <Header storeName={props.storeName} storeSlogan={props.storeSlogan} numberOfItems={props.pluData.length}/>
            <main>
                <Router>
                    <Switch>
                        <Route path="/produce"><Department id="Produce" pluData={props.pluData} /></Route>
                        <Route path="/meat"><Department id="Meat" pluData={props.pluData} /></Route>
                        <Route path="/grocery"><Department id="Grocery" pluData={props.pluData} /></Route>
                        <Route path="/bulk"><Department id="Bulk" pluData={props.pluData} /></Route>
                        <Route path="/" exact><Main pluData={props.pluData} /></Route>
                    </Switch>
                </Router>
            </main>
            <Footer />
        </>
    )
}
