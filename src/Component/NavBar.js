import React from 'react'
import './NavBar.css'
import SwipeableTemporaryDrawer from "./Drawer"
const NavBar = ({SetCategory,setLoadmore}) => {
  return (
    <div className='Nav'>
         <SwipeableTemporaryDrawer SetCategory={SetCategory} setLoadmore={setLoadmore}/>
         <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='Inshort'/>
    </div>
  )
}

export default NavBar
