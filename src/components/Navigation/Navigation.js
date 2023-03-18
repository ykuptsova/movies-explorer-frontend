import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="navigation">
      <ul className="navigation__links-list">
        <li className="navigation__links-item">
          <NavLink
            to='/movies'
            className={ 'navigation__link' + (!props.onlySavedMovies ? ' navigation__link-bold' : '') }>
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__links-item">
          <NavLink
            to='/saved-movies' 
            className={ 'navigation__link' + (props.onlySavedMovies ? ' navigation__link-bold' : '') }>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation