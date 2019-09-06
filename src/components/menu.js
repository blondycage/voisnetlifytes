import React from "react"
import Link from "gatsby-link"

const Menu = () => (
  <div
    style={{
      background: "#f0f4f0",
      paddingTop: "10px",
      paddingBottom: "0px",
    }}
  >
    <ul
      style={{
        display:"flex",
        listStyle: "none",
        justifycontent:"space-evenly",
       margin:0,
       padding:0,


           
  
        
      }}
    >
      <li
      style={{display:"inline-block",
    margin:"0 50px 0 10" }}
      >
        <Link to="/">Home</Link>
      </li>
      <li style={{display:"inline-block",
    margin:"0 50px 0 0" }}>
        <Link to="/about">About</Link>
      </li>
      <li style={{display:"inline-block",
    margin:"0 50px 0 10" }}>
        <Link to="/services">Services</Link>
      </li>
      <li style={{display:"inline-block",
    margin:"0 50px 0 10" }}>
        <Link to="/blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
