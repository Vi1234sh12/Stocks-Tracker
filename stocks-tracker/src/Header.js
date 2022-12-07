import React from 'react'
import Logo from './robinhood.svg'
import "./Header.css";

function Header() {
  return (
    <div className="header__wrapper">
        <div className="header__logo">
            <img src={Logo} width={50} /> 
        </div>
        <div className="header__search">
            <div className="header__searchContainer">
           
                  <input placeholder="Search" type="text" />
                  
            </div>
        </div>
        <div className="header__menuItems">
            <a href="a">Free Stock</a>
            <a href="a">Cash</a>
            <a href="a">News</a>
            <a href="a">Account</a>
        </div>

    </div>
  )
}

export default Header