import { useState,  useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import './Profile.css';
import Header from '../Header/Header'

function Profile (props) {
  const [editing, setEditing] = useState(false);
  const [error] = useState(true);
  const user = useContext(UserContext); 

  return (
    <div className="profile">
      <Header handleSignIn={ props.handleSignIn } handleSignOut={ props.handleSignOut }/>
      <section className="profile__content">
        <form className="profile__form" name="profile">
        <h1 className="profile__title">{`Привет, ${user.name || ''}!`}</h1>
        <div className="profile__labels-container">
          <label className="profile__label">
            <span className="profile__label-text">Имя</span>
            <input
              className="profile__input"
              name="name"
              placeholder="Введите своё имя"
              type="text"
              required
              minLength="2"
              maxLength="30"
            />
          </label>
          <label className="profile__label">
            <span className="profile__label-text">E-mail</span>
            <input
              className="profile__input profile__input_no-border"
              name="email"
              placeholder="Введите ваш email"
              type="email"
              required
            />
          </label>
          </div>
          <div className="profile__buttons-container">
            { editing && error && <div className="profile__error-message">При обновлении профиля произошла ошибка.</div> }
            { !editing
              ? <button
                  className="profile__button-edit"
                  onClick={ () => setEditing(true) }>Редактировать</button>
              : <button
                  className={ "profile__button-save" + (error ? ' profile__button-save_disabled' : '') }
                  onClick={ () => setEditing(false) }>Сохранить</button> }
            { !editing &&
              <button type="submit" className="profile__button-exit">Выйти из аккаунта</button> }
          </div>
        </form>
      </section>
    </div>
  );
}

export default Profile

