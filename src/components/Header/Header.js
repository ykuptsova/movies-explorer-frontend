import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import './Header.css';
import logo from "../../images/logo.svg"
import hamburger from "../../images/hamburger.svg"
import Navigation from '../Navigation/Navigation'
import AccountButton from '../AccountButton/AccountButton'
import NavOverlay from '../NavOverlay/NavOverlay'

function Header (props) {
  const user = useContext(UserContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const renderLoggedIn = () => {
    return (
      <>
        <div className="header__left-part">
          <div className="header__project-logo" onClick={ props.handleSignOut }>
            <img alt='project logo' src={logo}/>
          </div>
          <Navigation onlySavedMovies={ props.onlySavedMovies }/>
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
          <img alt='project logo' src={logo}/>
        </div>
        <div className="header__buttons">
          <button className='header__button header__button_register'>Регистрация</button>
          <button
            className='header__button header__button_enter'
            onClick={ props.handleSignIn }>
            Войти
          </button>
        </div>
      </>
    )
  }

  const className = user.id ? 'header header_loggedIn' : 'header header_loggedOut'
  return (
    <div className={ className }>
      { user.id ? renderLoggedIn() : renderLoggedOut() }
    </div>
  )  
}

export default Header; 