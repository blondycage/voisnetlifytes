import React from 'react'

import './Toolbar.css'
import Link from "gatsby-link"

const toolbar = props => (
  
    <nav className="toolbar__navigation"
   >
      
      <div className="toolbar__logo">
    <Link
          to="/"
          
        >
          ApexFinance
        </Link>
      </div>
      <div className="spacerd"/>
      
      <div className="toolbar_navigation-items">
        <ul>
          <li>
          <Link to="/about">about</Link>
          </li>
          <li>
          <Link to="/services">services</Link>
          </li>
          <li>
          <Link to="/blog">blog</Link>
          </li>
        </ul>
      </div>
    </nav>

)

export default toolbar