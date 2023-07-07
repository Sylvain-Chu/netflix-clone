import React, { useEffect, useState } from 'react'
import netflix_logo from '../../img/netflix_logo.png';
import avatar from '../../img/avatar.png';
import {
  Header,
  Nav,
  NavLinks,
  NavLink,
  HoveredNavLinkText,
  SecondaryNav,
  BlackNav,
  Logo,
  Avatar
} from "./style";

function Navbar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  })

  return (

    <Header className={show ? "nav nav_black" : "nav"}>
      <Nav className='nav__contents'>
        <Logo className='nav__logo' src={netflix_logo} alt='logo' />
        <NavLinks className="nav__links">
          <NavLink className="nav__link"><HoveredNavLinkText href="#">Accueil</HoveredNavLinkText></NavLink>
          <NavLink className="nav__link"><HoveredNavLinkText href="#">Séries</HoveredNavLinkText></NavLink>
          <NavLink className="nav__link"><HoveredNavLinkText href="#">Films</HoveredNavLinkText></NavLink>
          <NavLink className="nav__link"><HoveredNavLinkText href="#">Nouveautés les plus regardées</HoveredNavLinkText></NavLink>
        </NavLinks>

        <SecondaryNav className="nav__secondary">
          <a href="#">
            <Avatar className='nav__avatar' src={avatar} alt='logo' />
          </a>
        </SecondaryNav>
      </Nav>
    </Header>
  )
}

export default Navbar