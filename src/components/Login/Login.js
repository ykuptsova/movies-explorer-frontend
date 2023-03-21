import { NavLink } from 'react-router-dom';
import './Login.css';
import AuthPanel from '../AuthPanel/AuthPanel';
import PageContent from '../PageContent/PageContent';
import Logo from '../Logo/Logo';

function Login () {
  return (
    <PageContent>
      <section className="login">
        <form className="login__form" name="login">
          <div className="login__form-inputs">
            <Logo/>
            <h1 className="login__title">Рады видеть!</h1>
            <div className="login__labels-container">
              <label className="login__label">
                <span className="login__label-text">E-mail</span>
                <input
                  className="login__input"
                  name="email"
                  placeholder="Введите ваш email"
                  type="email"
                  required
                />
              </label>
              <label className="login__label">
                <span className="login__label-text">Пароль</span>
                <input
                  className="login__input"
                  name="password"
                  placeholder="Введите ваш пароль"
                  type="password"
                  required
                />
              </label>
            </div>
          </div>
          <div className="login__links-container">
            <AuthPanel type="signin"/>
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