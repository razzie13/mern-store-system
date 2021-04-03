import React, { useRef } from 'react'

export default function WebstoreSearch(props) {

    const itemSearch = useRef(null);

    let totalItems = ['search from ', props.numberOfItems, ' items']

    return (
        <div id="site-search">
            {/* <form action="/data/search/" method="GET"> */}
            <form onSubmit={props.action} method="GET">
                <input type="text" name="itemCode" placeholder={props.numberOfItems !== null ? totalItems.join('') : null} ref={itemSearch} />
                <button type="submit">search</button>
            </form>  
        </div>
        
    )
}
