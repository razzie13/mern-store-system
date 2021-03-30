import React from 'react'

import WebstoreProductCard from '../WebstoreProductCard/WebstoreProductCard'

export default function WebstoreDepartment(props) {



    return (
        <>
            <h3>{props.id}</h3>
            <div id="item-display-area">
                {props.pluData.map(itemData =>
                            itemData.itemDepartment === props.id ?
                            <WebstoreProductCard id={props.id} key={itemData._id} itemDescription={itemData.itemDescription} itemType={itemData.itemType} promo={itemData.promo} itemPrice={itemData.itemPrice} itemPromo={itemData.itemPromo} itemCode={itemData.itemCode} itemImage={itemData.itemImage} weighedItem={itemData.weighedItem} addToShoppingCart={props.addToShoppingCart} />                            
                            : null
                        )} 
            </div>
        </>
    )
}
