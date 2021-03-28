import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import Nav from '../Nav/Nav'

export default function Header(props) {
    return (
        <>
          <header>
            <div id="header-inside">
                <h2 id="store-name"><a href="https://gregrasmussen.com/store-system/webstore">{props.storeName}</a></h2>
                    <h4 id="store-slogan">{props.storeSlogan}</h4>
                    
                    <Link to="/contact">contact</Link>
                    <Link to="/aboutus">about us</Link>
                    <span class="social-icons">
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook-f"></i>
                    </span>
            </div> 
            <Nav />
        </header>

        <div id="below-header">
            Town Market is a fake <span class="hide-on-mobile">demonstration</span> store that sells nothing<span class="hide-on-mobile"> except the website development skills of very real web developer Greg Rasmussen, who built this site from scratch using NodeJS, Express, and MongoDB</span>.
        </div>  

        
        </>
    )
}
