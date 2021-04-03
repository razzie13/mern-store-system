import React from 'react'

export default function WebstoreSearchPopup(props) {
    return (
        <div className="search-popup">
            <h2>Search Results for "{props.searchedItem}"</h2>

            <button className="close-search-popup-button" onClick={props.hideSearchPopup}>close X</button>
        </div>
    )
}
