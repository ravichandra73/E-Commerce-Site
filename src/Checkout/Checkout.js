import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal'


const Checkout = () => {
  return (
    <div className ='checkout-container'>

      
      <div className='checkout-left'>
        <div className='checkout-ad-image-div'>
            <img className='checkout-ad-image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/L1headers/Cat-header-PC-Deals-on-clothing-1500x270.jpg" alt="ad amazon" />
        </div>
        <div>
        <h1 className='checkout-heading'>Your Shopping Cart</h1>
        </div>
        <div className='checkout-product-container'>
        <div className='checkout-product'>
          <CheckoutProduct   productname="Maison Margielatabi-toe ankle boots" currency="$"price={2511.5} rating={4}  url="https://cdn-images.farfetch-contents.com/18/44/10/31/18441031_41155602_1000.jpg"/>
          <CheckoutProduct  productname="Samsung Black and white tv"
            currency="Rs" 
            price={2,50000} 
            rating={5} 
            url ="https://cdn.shopify.com/s/files/1/1034/1611/products/1623763948_IMG_1551338_800x.jpg?v=1650503560"></CheckoutProduct>
            <CheckoutProduct productname="Jimmy Choo Man Black EDT Jimmy Choo perfume do the talking for you." currency="$"price={1023.56} rating={5}url="https://m.media-amazon.com/images/I/71Uz1PU0kgL._SL1500_.jpg"/>
          </div>
        </div>
        
        </div>
        <div className='checkout-right'>
        <div className='checkout-subtotal'>
            <Subtotal></Subtotal>
        </div>
        </div>
        
        
    </div>
  )
}

export default Checkout