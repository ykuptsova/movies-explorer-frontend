import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';
import useValidation from '../../hooks/useValidation.js';
import mainApi from '../../utils/MainApi.js'
import AuthPanel from '../AuthPanel/AuthPanel';
import PageContent from '../PageContent/PageContent';
import Logo from '../Logo/Logo';


function Login (props) {
  const [serverError, setServerError] = useState('');
  const { values, errors, isValid, handleChange } = useValidation();

  const onInput = (e) => {
    setServerError('')
    handleChange(e)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = values
    mainApi
      .signin(email, password)
      .then(() => mainApi
        .getUserInfo()
        .then(user => props.handleSignIn(user)))      
      .catch(e =>
        setServerError(e.message))
  }

  return (
    <PageContent>
      <section className="login">
        <form className="login__form" name="login" onSubmit={ onSubmit }>
          <div className="login__form-inputs">
            <Logo/>
            <h1 className="login__title">Рады видеть!</h1>
            <div className="login__labels-container">
              <label className="login__label">
                <span className="login__label-text">E-mail</span>
                <input
                  className={`login__input ${errors.email && 'login__input_error'}`}
                  name="email"
                  value={ values.email || '' }
                  onChange={ onInput }
                  placeholder="Введите ваш email"
                  type="email"
                  required
                />
                <span className="login__error">{ errors.email || '' }</span>
              </label>
              <label className="login__label">
                <span className="login__label-text">Пароль</span>
                <input
                  className={ `login__input ${errors.password && 'login__input_error'}` }
                  name="password"
                  value={ values.password || '' }
                  onChange={ onInput }
                  placeholder="Введите ваш пароль"
                  type="password"
                  required
                />
                <span className="login__error">{ errors.password || '' }</span>
              </label>
            </div>
          </div>
          <div className="login__links-container">
            <span className="login__error">{ serverError || '' }</span>
            <AuthPanel type="signin" disabled={ !isValid }/>
            <span className="login__reg-request"> 
              Ещё не зарегистрированы?&nbsp;
              <NavLink to='/signup' className='login__reg-link'>
                Регистрация
              </NavLink>
            </span>
          </div>
        </form>
      </section>
    </PageContent>
  );
}

export default Login;