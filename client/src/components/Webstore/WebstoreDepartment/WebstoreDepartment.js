import React from 'react'

import WebstoreProductCard from '../WebstoreProductCard/WebstoreProductCard'

export default function WebstoreDepartment(props) {

    let sortByCategories = [];
    let categories = [];

    let sortByDepartments = [];
    let departments = [];

    props.pluData.map(department =>
        sortByDepartments.push(department.itemDepartment)
        )
        departments = [...new Set(sortByDepartments)]
        console.log(departments)


    return (
        <div>
            
            {props.pluData.map(itemData =>  
                        <WebstoreProductCard key={itemData._id} itemName={itemData.itemDescription} itemType={itemData.itemType} itemPrice={itemData.itemPrice} itemCode={itemData.itemCode} />
                    )} 
        </div>
    )
}
