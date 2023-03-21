import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const location = useLocation()

  return (
    <nav className="navigation">
      <ul className="navigation__links-list">
        <li className="navigation__links-item">
          <NavLink
            to='/movies'
            className={ 'navigation__link' + (location.pathname === '/movies' ? ' navigation__link-bold' : '') }>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <NavLink
            to='/saved-movies' 
            className={ 'navigation__link' + (location.pathname === '/saved-movies' ? ' navigation__link-bold' : '') }>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation