import React, { useEffect, useState } from 'react'
import './Nav.css';
import netflix_logo from './../img/netflix_logo.png';
import avatar from './../img/avatar.png';


function Nav() {

const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if(window.scrollY > 100){
    handleShow(true);
  }else{
    handleShow(false);
  }
}

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  })  

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src={`${netflix_logo}`}
          alt='logo'/>

        <img 
          className='nav__avatar' 
          src={`${avatar}`}
          alt='logo'/>
      </div>
    </div>
  )
}

export default Nav