import React from 'react'

import WebstoreProductCard from '../WebstoreProductCard/WebstoreProductCard'

export default function WebstoreDepartment(props) {



    return (
        <div>
            <h3>{props.id}</h3>
            {props.pluData.map(itemData =>
                        itemData.itemDepartment === props.id ?
                        <WebstoreProductCard key={itemData._id} itemDescription={itemData.itemDescription} itemType={itemData.itemType} itemPrice={itemData.itemPrice} itemCode={itemData.itemCode} itemImage={itemData.itemImage} />                            
                        : null
                    )} 
        </div>
    )
}
