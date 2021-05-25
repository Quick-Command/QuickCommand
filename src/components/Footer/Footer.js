import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer data-cy='footer' className='footer-container'>
      <NavLink data-cy='passport-link' to='/passport' className="footer-link">Onsite Protocols</NavLink>
      <NavLink data-cy='profiles-link' to='/profiles' className="footer-link">Team Profiles</NavLink>
    </footer>
  )
}

export default Footer;