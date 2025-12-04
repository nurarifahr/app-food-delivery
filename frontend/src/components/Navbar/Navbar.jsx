import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className='nav-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-ap</a>
        <a href='#footer' onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>contact us</a>
      </ul>
      <div className='nav-list'>
        <img src={assets.search_icon} alt="" className='icon-search'/>
        <div className='relative'>
            <span className='notif'></span>
            <Link to='/cart'><img src={assets.basket_icon} alt="" className='icon-basket'/></Link>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
