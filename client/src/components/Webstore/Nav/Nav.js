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
                           <form onChange={props.siteNavigation} method="GET">
                               <label>
                                    Produce
                                    <input type="radio" name="itemDepartment" id="Produce" value="Produce" />
                               </label>

                                <label>
                                    Meat
                                    <input type="radio" name="itemDepartment" id="Meat" value="Meat" />
                                </label>

                                <label>
                                    Grocery
                                    <input type="radio" name="itemDepartment" id="Grocery" value="Grocery" />
                                </label>

                                <label>
                                    Bulk
                                    <input type="radio" name="itemDepartment" id="Bulk" value="Bulk" />
                                </label>


                                {/* <select>
                                    <option name="itemDepartment" value="Produce">Produce</option>
                                    <option name="itemDepartment" value="Meat">Meat</option>
                                    <option name="itemDepartment" value="Grocery">Grocery</option>
                                    <option name="itemDepartment" value="Bulk">Bulk</option>
                                </select> */}
                           </form>
                            {/* <Link to="/produce">Produce</Link>
                            <Link to="/meat">Meat</Link>
                            <Link to="/grocery">Grocery</Link>
                            <Link to="/bulk">Bulk</Link>    */}
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
