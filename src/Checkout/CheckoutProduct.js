import React from 'react'
import "./CheckoutProduct.css"

const CheckoutProduct = ({url,alt,productname,currency,price}) => {
  return (
    <div className='checkout-product-container'>
        <div className='checkout-product-image-div'>
            <img className='checkout-product-image' src={url} alt={alt} />
        </div>
        <div className='checout-product-details'>
            <strong>{productname}</strong>
            <p><small>{currency}</small><strong>{price}</strong></p>
            <span>⭐</span><br></br>
            <button className='remove-from-cart'>Remove from Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct