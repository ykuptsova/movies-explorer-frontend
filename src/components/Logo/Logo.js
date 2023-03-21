import './Logo.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Logo() {
  return (
    <NavLink to={'/'}>
      <img className="logo" src={ logo } alt="project logo" />
    </NavLink>
  )
}

export default Logo;