import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

const Home = () => {
return (
    <div className='home-container'>
            <div className='home-image'>
                    <img className='home-image-original' src="https://www.x-cart.com/img/16591/ecommerce-p800.jpg" alt="e-commerce" />
            </div >

            <div className='products'>
            <div className='home-product-first-row'>
            <Product productname="Jimmy Choo Man Black EDT Jimmy Choo perfume do the talking for you." currency="$"price={1023.56} rating={5}url="https://m.media-amazon.com/images/I/71Uz1PU0kgL._SL1500_.jpg"/>
            <Product productname="Maserati Potenza Watch" 
            currency="$" 
            price={720.69} 
            rating={4} 
            url="https://m.media-amazon.com/images/I/61V24lK0tlL._UL1200_.jpg"/>

            </div>
            
            <div className='home-product-second-row'>
            <Product productname="Audemars piguet oak" currency="$"price={10,999}rating={5}url="https://cdn-images.farfetch-contents.com/18/46/81/35/18468135_39826255_1000.jpg"/>

            <Product  productname="Maison Margielatabi-toe ankle boots" currency="$"price={2511.5} rating={4}  url="https://cdn-images.farfetch-contents.com/18/44/10/31/18441031_41155602_1000.jpg" />

            <Product  productname="Golden Goosedistressed low-top sneakers" 
            currency="$" 
            price={999.99} 
            rating={3} 
            url="https://cdn-images.farfetch-contents.com/18/92/06/51/18920651_41148655_1000.jpg"/>

            </div>
            
            <div className='home-product-third-row'>

            <Product productname="Samsung Black and white tv"
            currency="Rs" 
            price={2,50000} 
            rating={5} 
            url ="https://cdn.shopify.com/s/files/1/1034/1611/products/1623763948_IMG_1551338_800x.jpg?v=1650503560"/>

            </div>

            </div>
    </div>
    )
}

export default Home