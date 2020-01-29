import React from "react"
import { Link } from "gatsby"
const Menu = () => (
  <div style={{ background: "#f4f4f4", paddingTop: "10px" }}>
    <ul
      style={{
        textDecoration: "none",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="about">
        <li>About</li>
      </Link>
      <li>
        <Link to="services">Services</Link>
      </li>
      <li>
        <Link to="blog">Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
