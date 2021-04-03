import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Nav from '../Nav/Nav'
import Search from '../WebstoreSearch/WebstoreSearch'
import Disclaimer from '../WebstoreDisclaimer/WebstoreDisclaimer'

export default function Header(props) {

    return (
        <>
          <header>
            <div id="header-inside">

                <div id="store-info">
                    <h2 id="store-name"><Link to="/">{props.storeName}</Link></h2>
                    <h4 id="store-slogan">{props.storeSlogan}</h4>
                    <Search numberOfItems={props.numberOfItems} action={props.action} />
                </div>

                
                    
                <div id="store-contact">
                    Welcome back, {props.loggedIn ? 'name!' : 'guest!'}
                    <Link to="/contact">contact</Link>
                    <Link to="/aboutus">about us</Link>
                    <span className="social-icons">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                </div>    
                    
            </div> 
            <Nav totalItemsInCart={props.totalItemsInCart} showShoppingCartAction={props.showShoppingCartAction} loggedIn={props.loggedIn} siteNavigation={props.siteNavigation}/>
        </header>

        <div id="below-header">
            <Disclaimer />
        </div>  

        
        </>
    )
}
