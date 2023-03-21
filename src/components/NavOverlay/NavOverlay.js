import './NavOverlay.css';
import { NavLink } from 'react-router-dom';
import close from "../../images/close.svg"
import AccountButton from '../AccountButton/AccountButton'

function NavOverlay(props) {
  return (
    <nav className="nav-overlay">
      <div className="nav-overlay__content">        
        <ul className="nav-overlay__links-list">
          <li className="nav-overlay__links-item">
            <NavLink to='/' className='nav-overlay__link'>
              Главная
            </NavLink>
          </li>
          <li className="nav-overlay__links-item">
            <NavLink to='/movies' className='nav-overlay__link'>
              Фильмы
            </NavLink>
          </li>
          <li className="nav-overlay__links-item">
            <NavLink to='/saved-movies' className='nav-overlay__link'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton/>
        <button className="nav-overlay__close-button" onClick={ props.onClose }>
          <img alt="close navigation overlay" src={ close }/>
        </button>
      </div>
    </nav>
  )
}

export default NavOverlay