import React from 'react'
import { FaStore,FaSearch, FaCartPlus} from "react-icons/fa";
import "./Header.css"


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-shopname'>
            <h1 className='orange'><FaStore></FaStore></h1>
            <h1 className='white'>eSHOP</h1>
        </div>

        <div className='header-searchbar'>
          <input value='search' name="search-bar" type='text' className='searchbar' />
          <h3 className='searchicon'><FaSearch></FaSearch></h3>
        </div>

        <div className='header-nav-items'>
          <div className='header-nav-signin'>
            <h5 className='white'>Hello Guest</h5>
            <a><h2 className='white'>signIn</h2></a>
          </div>
          <div className='header-nav-yourshop'>
            <h5 className='white'>Your</h5>
            <a><h2 className='white'>Shop</h2></a>
          </div>

          <div className='cart-items'>
          <h1 className='white'><FaCartPlus/></h1>
          <h2 className='white cart-num-items'>0</h2>
          </div>
        </div>

    </div>
  )
}

export default Header
