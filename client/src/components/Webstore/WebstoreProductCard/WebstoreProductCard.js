import React from 'react'

export default function WebstoreProductCard(props) {

    let idClasses = ["price-amount-", props.itemCode]

    return (
        <div id={idClasses.join('')} className="food-item-section">
            <img src={props.itemImage === 'images/' + props.id ? 'images/produce/z-image-not-available.jpg' : props.itemImage} width="200" alt={props.itemDescription}></img>
            <h3>Product Name</h3>
                <div id="price-amount-" className="price-and-amount">
                    <h4>{props.itemDescription + ' ' + props.itemType}</h4>
                    {/* <form action="/webstore-shop" method="POST"></form>
                        <label for="">Quantity: </label>
                        <input id="" class="price-and-amount-quantity" name="quantity" type="number" min="0">
                        <input id="order-code" value="" name="itemPluCode" style="visibility: hidden;">
                        <input type="submit" class="add-to-order-button" value="add to order">
                    </form> */}
                </div>
        </div>
    )
}
