import React, { useRef } from 'react'

export default function WebstoreLogin() {

    const userName = useRef(null);
    const userPass = useRef(null);

    const handleLoginClick = () => {
        userName.current.focus();
        userPass.current.focus();    
    }
    return (
        <div id="site-login">
            <form>
                <input type="text" placeholder="username" ref={userName} />
                <input type="text" placeholder="password" ref={userPass} />

                <input type="button" value="search" onClick={handleLoginClick} />
            </form>  
        </div>
        
    )
}