import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <div>
      <h1 className='site-header'>QuickCommand</h1>
      <nav>
        <NavLink to='/database' className='nav-link' data-cy='database-btn'>DATABASE</NavLink>
        <NavLink to='/' className='nav-link' data-cy='incidents-btn'>INCIDENTS</NavLink>
      </nav>
    </div>
  )
}

export default Header;