import React, { useRef } from 'react'

export default function WebstoreProductCard(props) {

    console.log(props)

    let idClasses = ["price-amount-", props.itemCode]

    const itemQuantity = useRef(null)
    const itemPluCode = useRef(null)
    const addToCart = useRef(null)

    return (
        <div id={idClasses.join('')} className="food-item-section">
            <div className="card-top">
                <img src={props.itemImage === ('images/' + props.currentDepartment.toLowerCase() + '/') ? 'images/produce/z-image-not-available.jpg' : props.itemImage} width="200" alt={props.itemDescription}></img>
                <h3>{props.itemDescription + ' ' + props.itemType}</h3>
            </div>

            
            <div className="price-and-amount">
                {props.promo ? 
                    <div id="item-on-promo">
                        <h4>Was <span className="regular-price-now-on-sale">
                            {props.weighedItem ? (props.itemPrice * 0.454).toFixed(2) + '/lb' : props.itemPrice  + ' each'}
                            </span><br></br> Now {props.weighedItem ? (props.itemPromo * 0.454).toFixed(2) + '/lb' : props.itemPromo + ' each'}</h4>
                    </div>
                    : <h4>{props.weighedItem ? (props.itemPrice * 0.454).toFixed(2) + '/lb' : props.itemPrice + ' each'}</h4>}

                <form onSubmit={props.addToShoppingCart} method="POST">
                    <label>Quantity:
                        <input className="price-and-amount-quantity" name="quantity" ref={itemQuantity} type="number" min="0" />
                    </label>
                    <input defaultValue={props.itemCode} name="itemPluCode" ref={itemPluCode} readonly />
                    <button type="submit" className="add-to-order-button" ref={addToCart}>add to order</button>
                </form>

            </div>
        </div>
    )
}
