import React from "react";
import "./Product.css"


const Product = ({productname, currency, price, rating,url,alt}) => {
  return (
    <div className="product-container">
      <div className="product-details">
        <p>{productname}</p><br></br>
        <span>{currency}</span>
        <span><b>{price}</b></span><br></br>
        <span>{Array(rating).fill().map(()=>(<span>⭐</span>))}</span>
      </div>
      <img className="product-image" src={url} alt={alt} /><br />
      <button className="add-to-cart">Add to cart</button>

    </div>
  )
}

export default Product