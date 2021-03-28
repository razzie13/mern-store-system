import React, { useRef } from 'react'

export default function WebstoreSearch(props) {

    const itemSearch = useRef(null);

    const handleSearchClick = () => {
        itemSearch.current.focus();    
    }

    let totalItems = ['search from ', props.numberOfItems, ' items']

    return (
        <div id="site-search">
            <form>
                <input type="text" placeholder={totalItems.join('')} ref={itemSearch} />
                <input type="button" value="search" onClick={handleSearchClick} />
            </form>  
        </div>
        
    )
}
