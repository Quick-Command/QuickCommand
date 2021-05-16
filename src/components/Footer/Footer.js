import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer data-cy='footer' className='footer-container'>


      <NavLink to='/passport'>Personnel Documents</NavLink>
      <NavLink to='/profiles'>Team Profiles</NavLink>
    </footer>
  )
}

export default Footer;