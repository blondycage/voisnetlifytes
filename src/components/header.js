/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import Link from "gatsby-link"

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
        <Link to="/">Home</Link>
          <Link to="/about">About US</Link>
          
          
          <Link to="/services">Media</Link>
          <Link to="/members">Members</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/events">Upcoming Events</Link>
          <Link to="/blog">blog</Link>
          <Link to="/donate">Donate</Link>
         
         
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
      <img src="https://img.icons8.com/material-two-tone/24/000000/menu.png" alt="my image"   />
      </button>
    </header>
  );
}

