import React from 'react'

import Disclaimer from '../WebstoreDisclaimer/WebstoreDisclaimer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
        <footer>
            <div id="footer-container">
                <div id="footer-store-name"><Disclaimer /> You can visit his page at gregrasmussen.com to see his works and portfolio.</div>
                <div id="footer-menus">
                    <div className="hide-on-mobile">
                        <ul>
                            <li>1234 Rue Fake Street</li>
                            <li>Fake, Ontario</li>
                            <li>Canada</li>
                        </ul>
                    </div>
                    <div className="hide-on-mobile">
                        <ul>
                            <li>Fake Jobs</li>
                            <li>Fake Become a Supplier</li>
                        </ul>
                    </div>
                    <div className="hide-on-mobile">
                        <ul>
                            <li><FontAwesomeIcon icon={faFacebook} /> Fake Facebook</li>
                            <li><FontAwesomeIcon icon={faInstagram} /> Fake Instagram</li>
                            <li><FontAwesomeIcon icon={faLinkedin} /> Fake Linkedin</li>
                            <li><FontAwesomeIcon icon={faTwitter} /> Fake Twitter</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
        <div id="footer-copyright">Copyright 2021 Greg Rasmussen</div>
        </>
    )
}
