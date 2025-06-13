import React from 'react'
import "../styles/Header.css";

function Header() {
  return (
    <header id="hero"className="header">
      <nav className='navbar'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/blog">Blogs</a></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header;
