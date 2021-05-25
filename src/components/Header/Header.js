import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <section className="logo-container mobile-hidden">
        <Link to='/' className="logo-link">
          <img className='logo' src={'/qc-logo-9.png'} alt='Quick Command Logo'></img>
        </Link>
      </section>
      <nav className='header-links'>
        <NavLink to='/database' className='nav-link' data-cy='database-btn'>PERSONNEL</NavLink>
        <div className='btn-dash'></div>
        <NavLink to='/' className='nav-link' data-cy='incidents-btn'>INCIDENTS</NavLink>
      </nav>
    </div>
  )
}

export default Header;