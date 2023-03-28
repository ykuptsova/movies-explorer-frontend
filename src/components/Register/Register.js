import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css';
import useValidation from '../../hooks/useValidation.js';
import mainApi from '../../utils/MainApi.js'
import AuthPanel from '../AuthPanel/AuthPanel.js';
import PageContent from '../PageContent/PageContent';
import Logo from '../Logo/Logo';


function Register (props) {
  const [serverError, setServerError] = useState('');
  const { values, errors, isValid, handleChange } = useValidation();

  const onInput = (e) => {
    setServerError('')
    handleChange(e)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password } = values
    mainApi
      .signup(name, email, password)
      .then(user => mainApi
        .signin(email, password)
        .then(() => mainApi.getUserInfo())
        .then(() => props.handleSignUp(user)))      
      .catch(e =>
        setServerError(e.message))
  }

  return (
    <PageContent>
      <section className="register">
        <form className="register__form" name="register" onSubmit={ onSubmit }>
          <div className="register__form-inputs">
            <Logo/>
            <h1 className="register__title">Добро пожаловать!</h1>
            <div className="register__labels-container">
              <label className="register__label">
                <span className="register__label-text">Имя</span>
                <input
                  className={ `register__input ${errors.name && 'register__input_error'}` }
                  name="name"
                  value={ values.name || '' }
                  onChange={ onInput }
                  placeholder="Введите своё имя"
                  type="text"
                  required
                />
                <span className="register__error">{ errors.name || '' }</span>
              </label>
              <label className="register__label">
                <span className="register__label-text">E-mail</span>
                <input
                  className={`register__input ${errors.email && 'register__input_error'}`}
                  name="email"
                  value={ values.email || '' }
                  onChange={ onInput }
                  placeholder="Введите ваш email"
                  type="email"
                  required
                />
                <span className="register__error">{ errors.email || '' }</span>
              </label>
              <label className="register__label">
                <span className="register__label-text">Пароль</span>
                <input
                  className={ `register__input ${errors.password && 'register__input_error'}` }
                  name="password"
                  value={ values.password || '' }
                  onChange={ onInput }
                  placeholder="Введите ваш пароль"
                  type="password"
                  required
                />
                <span className="register__error">{ errors.password || '' }</span>
              </label>
            </div>
          </div>
          <div className="register__links-container">
            <span className="register__error">{ serverError || '' }</span>
            <AuthPanel type="signup" disabled={ !isValid }/>
            <span className="register__login-request"> 
              Уже зарегистрированы?&nbsp;
              <NavLink to='/signin' className='register__login-link'>
                Войти
              </NavLink>
            </span>
          </div>
        </form>
      </section>
    </PageContent>
  );
}

export default Register;