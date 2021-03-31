import React, { useRef } from 'react'

export default function WebstoreSearch(props) {

    const itemSearch = useRef(null);

        // const handleSearchClick = () => {
    //     itemSearch.current.focus();  
    //     fetch('/data/search-by-item-code')
    //         .then(res => res.json())
    //         .then(plu_data => this.setState({plu_data}, () => console.log('data fetched..', plu_data)))
    //     console.log('function handleSearchClick')
    // }

    let totalItems = ['search from ', props.numberOfItems, ' items']

    return (
        <div id="site-search">
            {/* <form action="/data/plu-data" method="GET"> */}
            <form onSubmit={props.action} method="GET">
                <input type="text" name="itemCode" placeholder={props.numberOfItems !== null ? totalItems.join('') : null} ref={itemSearch} />
                <button type="submit">search</button>
            </form>  
        </div>
        
    )
}
