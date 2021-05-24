import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer data-cy='footer' className='footer-container'>
      <NavLink data-cy='passport-link' to='/passport'>Personnel Documents/Onsite Protocol</NavLink>
      <NavLink data-cy='profiles-link' to='/profiles'>Team Profiles</NavLink>
    </footer>
  )
}

export default Footer;