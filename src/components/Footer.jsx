import React from 'react'
import Logo from "../img/Logo.png"

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        I love <b>React.js</b> 
      </span>
    </footer>
  )
}

export default Footer