import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import './Header.css';
import logo from "../../images/logo.svg"
import Navigation from '../Navigation/Navigation'

function Header (props) {
  const currentUser = useContext(CurrentUserContext);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(!!currentUser.id)
  }, [currentUser]);

  const renderLoggedIn = () => {
    return (
      <>
        <div className="header__left-part">
          <div className="header__project-logo" onClick={ props.handleSignOut }>
            <img alt='project logo' src={logo}/>
          </div>
          <Navigation/>
        </div>
        <a href="/profile" className="header__account-link">
          Аккаунт
        </a>
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

  const className = loggedIn ? 'header header_loggedIn' : 'header header_loggedOut'
  return (
    <div className={ className }>
      { loggedIn ? renderLoggedIn() : renderLoggedOut() }
    </div>
  )  
}

export default Header; 