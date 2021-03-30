import React from 'react'

export default function WebstoreShoppingCart(props) {
    return (
        <div id="shopping-cart">
            <h2>Your Shopping Cart</h2>
            <button className="close-shopping-cart-button" onClick={props.hideShoppingCartAction}>close X</button>
            {props.shoppingCartContents.map(shoppingCartItem => 
                <div key={shoppingCartItem.itemCode}>
                    <h4>{shoppingCartItem.itemCode} - {shoppingCartItem.amount}</h4>
                </div>
            )}
        </div>
    )
}
