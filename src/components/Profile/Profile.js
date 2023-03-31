import { useState,  useContext } from 'react';
import mainApi from '../../utils/MainApi.js'
import UserContext from '../../contexts/UserContext';
import useValidation from '../../hooks/useValidation.js';
import PageContent from '../PageContent/PageContent';
import Header from '../Header/Header'
import './Profile.css';


function Profile (props) {
  const user = useContext(UserContext); 
  const [editing, setEditing] = useState(false);
  const [serverError, setServerError] = useState('');
  const [loaing, setLoading] = useState(false);
  const { values, errors, isValid, handleChange }
    = useValidation({ name: user.name, email: user.email });

  const disableSubmit =
    !isValid || serverError || loaing ||
    (values.email === user.email && values.name === user.name)

  const onInput = (e) => {
    setServerError('');
    handleChange(e);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email } = values;
    setLoading(true)
    mainApi
      .setUserInfo({ name, email })
      .then(user => {
        props.handleProfileUpdate(user);
        setEditing(false);
        setLoading(false);
      })
      .catch(e => {        
        setServerError(e.message);
        setLoading(false);
      });
  }

  const onEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  }

  const onSignOut = (e) => {
    e.preventDefault();
    mainApi.signout();
    props.handleSignOut();
  }

  return (
    <div className="profile">
      <Header/>
      <PageContent>
        <section className="profile__content">
          <form className="profile__form" name="profile" onSubmit={ onSubmit }>
          <h1 className="profile__title">{`Привет, ${user.name || ''}!`}</h1>
            <div className="profile__labels-container">
              <label className="profile__label">
                <span className="profile__label-text">Имя</span>
                <input
                  className={ `profile__input ${errors.name && 'profile__input_error'}` }
                  name="name"
                  placeholder="Введите своё имя"
                  type="text"
                  value={ values.name || '' }
                  onChange={ onInput }
                  required
                  minLength="2"
                  maxLength="30"
                  disabled={ !editing }
                />
                <span className="profile__error">{ errors.name || '' }</span>
              </label>
              <label className="profile__label">
                <span className="profile__label-text">E-mail</span>
                <input
                  className={ `profile__input profile__input_no-border ${errors.name && 'profile__input_error'}` }
                  name="email"
                  placeholder="Введите ваш email"
                  type="email"
                  value={ values.email || '' }
                  onChange={ onInput }
                  required
                  disabled={ !editing }
                />
                <span className="profile__error">{ errors.email || '' }</span>
              </label>
            </div>
            <div className="profile__buttons-container">
              { editing && serverError &&
                <div className="profile__error-message">
                  При обновлении профиля произошла ошибка.
                </div> }
              { !editing
                ? <button
                    type="button"
                    className="profile__button-edit"
                    onClick={ onEdit }>
                    Редактировать
                  </button>
                : <button
                    type="submit"                    
                    disabled={ disableSubmit }
                    className={ `profile__button-save ${disableSubmit && 'profile__button-save_disabled'}` }>
                    Сохранить
                  </button> }
              { !editing &&
                <button
                  type="button"
                  className="profile__button-exit"
                  onClick={ onSignOut }>
                  Выйти из аккаунта
                </button> }
            </div>
          </form>
        </section>
      </PageContent>
    </div>
  );
}

export default Profile

