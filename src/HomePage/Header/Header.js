import React from 'react'
import { FaStore,FaSearch, FaCartPlus} from "react-icons/fa";
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div className='header-container'>
        <NavLink to='/' style={{ textDecoration:"none" }}>
        <div className='header-shopname'>
            <h1 className='orange shopname'><FaStore></FaStore></h1>
            <h1 className='white shopname'>eSHOP</h1>
        </div>
        </NavLink>

        <div className='header-searchbar'>
          <input value='search' name="search-bar" type='text' className='searchbar' />
          <h3 className='searchicon'><FaSearch></FaSearch></h3>
        </div>

        <div className='header-nav-items'>
          <div className='header-nav-signin'>
            <h5 className='white'>Hello Guest</h5>
            <a href='#'><h2 className='white'>signIn</h2></a>
          </div>
          <div className='header-nav-yourshop'>
            <h5 className='white'>Your</h5>
            <a><h2 className='white'>Shop</h2></a>
          </div>
            <NavLink to="/checkout" style={{textDecoration:"none"}}>
          <div className='cart-items'>
          <h1 className='white'><a href='#' className='cart' style={{color:"white"}}><FaCartPlus/></a></h1>
          <h1 className='white cart-num-items'>0</h1>
          </div>
          </NavLink>
        </div>

    </div>
  )
}

export default Header
