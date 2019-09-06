/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import Link from "gatsby-link"
import NotificationsForm from '../components/notification';
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      < h1 className="Logo" alt="logo" >VOISCYPRUS
        </h1>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
        
          <Link to="/about">about</Link>
          
          
          <Link to="/services">services</Link>
          
          <Link to="/blog">blog</Link>
          <Link to="/">home</Link>
          <NotificationsForm />
         
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      <img src="https://img.icons8.com/material-two-tone/24/000000/menu.png" alt="my image"   />
      </button>
    </header>
  );
}

