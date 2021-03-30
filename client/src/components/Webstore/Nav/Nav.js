import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Nav(props) {

    return (
        <>
            <Router>
                <nav>
                    <div id="nav-inside">
                        <div id="nav-inside-links">
                           <Link to="/">Home</Link>
                            <Link to="/produce">Produce</Link>
                            <Link to="/meat">Meat</Link>
                            <Link to="/grocery">Grocery</Link>
                            <Link to="/bulk">Bulk</Link>   
                        </div>
                        <div if="nav-shopping-cart">
                            <span>{props.totalItemsInCart} items in cart | <span onClick={props.showShoppingCartAction}>view cart</span></span>
                            {props.loggedIn ? null : <span>login</span>}
                              
                        </div>
                    </div>
                    
                </nav>
            </Router>

            
        </>
    )
}
