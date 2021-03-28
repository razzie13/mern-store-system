import React from 'react'

export default function Footer() {
    return (
        <>
        <footer>
            <div id="footer-container">
                <div id="footer-store-name">Town Market is a fake demonstration store that sells nothing except the website development skills of very real web developer Greg Rasmussen, who built this site from scratch using NodeJS, Express, and MongoDB. You can visit his page at gregrasmussen.com to see his works and portfolio.</div>
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
                            <li>Fake Facebook</li>
                            <li>Fake Instagram</li>
                            <li>Fake Linkedin</li>
                            <li>Fake Twitter</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
        <div id="footer-copyright">Copyright 2021 Greg Rasmussen</div>
        </>
    )
}
