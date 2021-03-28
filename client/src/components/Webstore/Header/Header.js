import React from 'react'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Nav from '../Nav/Nav'
import Search from '../WebstoreSearch/WebstoreSearch'

export default function Header(props) {

    return (
        <>
          <header>
            <div id="header-inside">

                <div id="store-info">
                    <h2 id="store-name"><Link to="/">{props.storeName}</Link></h2>
                    <h4 id="store-slogan">{props.storeSlogan}</h4>
                    <Search numberOfItems={props.numberOfItems}/>
                </div>

                
                    
                <div id="store-contact">
                    Welcome back, guest!
                    <Link to="/contact">contact</Link>
                    <Link to="/aboutus">about us</Link>
                    <span className="social-icons">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                    </span>
                </div>    
                    
            </div> 
            <Nav />
        </header>

        <div id="below-header">
            Town Market is a <strong>fake</strong> <span className="hide-on-mobile">demonstration</span> store that sells nothing<span className="hide-on-mobile"> except the website development skills of very real web developer Greg Rasmussen, who built this site from scratch using <strong>React, NodeJS, Express, and MongoDB</strong></span>.
        </div>  

        
        </>
    )
}
