import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (<>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link> </li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to={'/products'}>Products</Link></li>
    </ul>
  </>
  )
}

export default Header