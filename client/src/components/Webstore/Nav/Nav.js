import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <Router>
                <nav>
                    <Link to="/produce"></Link>
                    <Link to="/meat"></Link>
                    <Link to="/grocery"></Link>
                    <Link to="/bulk"></Link>
                </nav>
            </Router>

            
        </>
    )
}
