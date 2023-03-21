import { NavLink } from 'react-router-dom';
import './Register.css';
import AuthPanel from '../AuthPanel/AuthPanel.js';
import PageContent from '../PageContent/PageContent';
import Logo from '../Logo/Logo';

function Register () {
  return (
    <PageContent>
      <section className="register">
        <form className="register__form" name="register">
        <div className="register__form-inputs">
            <Logo/>
            <h1 className="register__title">Добро пожаловать!</h1>
            <div className="register__labels-container">
              <label className="register__label">
                <span className="register__label-text">Имя</span>
                  <input
                    className="register__input"
                    name="name"
                    placeholder="Введите своё имя"
                    type="text"
                    required
                  />
              </label>
              <label className="register__label">
                  <span className="register__label-text">E-mail</span>
                  <input
                    className="register__input"
                    name="email"
                    placeholder="Введите ваш email"
                    type="email"
                    required
                  />
              </label>
              <label className="register__label">
                  <span className="register__label-text">Пароль</span>
                  <input
                    className="register__input"
                    name="password"
                    placeholder="Введите ваш пароль"
                    type="password"
                    required
                  />
              </label>
            </div>
          </div>
          <div className="register__links-container">
              <AuthPanel type="signup"/>
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