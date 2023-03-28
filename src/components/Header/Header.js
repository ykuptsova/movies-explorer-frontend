import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../../contexts/UserContext.js';
import './Header.css';
import hamburger from '../../images/hamburger.svg';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AccountButton from '../AccountButton/AccountButton';
import NavOverlay from '../NavOverlay/NavOverlay';

function Header (props) {
  const user = useContext(UserContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const renderLoggedIn = () => {
    return (
      <>
        <div className="header__left-part">
          <div className="header__project-logo">
            <Logo/>
          </div>
          <Navigation/>
        </div>
        <div className="header__account-button">
          <AccountButton/>
        </div>
        <button className="header__hamburger" onClick={ () => setHamburgerOpen(true) }>
          <img alt='project menu' src={hamburger}/>
        </button>
        { hamburgerOpen && <NavOverlay onClose={ () => setHamburgerOpen(false) }/> }
      </>
    )
  }

  const renderLoggedOut = () => {
    return (
      <>
        <div className="header__project-logo">
          <Logo/>
        </div>
        <div className="header__links">
          <NavLink to='/signup' className='header__link header__link_register'>
            Регистрация
          </NavLink>
          <NavLink to='/signin' className='header__link header__link_enter'>
            Войти
          </NavLink>
        </div>
      </>
    )
  }

  const className = user._id ? 'header header_loggedIn' : 'header header_loggedOut'
  return (
    <header className={ className }>
      { user._id ? renderLoggedIn() : renderLoggedOut() }
    </header>
  )  
}

export default Header; 