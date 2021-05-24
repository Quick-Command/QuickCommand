import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={'/qc-logo-8.png'} alt='Quick Command Logo'></img>
      <h1 className='app-name'>QuickCommand</h1>
      <nav className='header-links'>
        <NavLink to='/database' className='nav-link' data-cy='database-btn'>DATABASE</NavLink>
        <div className='btn-dash'></div>
        <NavLink to='/' className='nav-link' data-cy='incidents-btn'>INCIDENTS</NavLink>
      </nav>
    </div>
  )
}

export default Header;