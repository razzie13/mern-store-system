import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Nav() {
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
                            0 items in cart
                        </div>
                    </div>
                    
                </nav>
            </Router>

            
        </>
    )
}
