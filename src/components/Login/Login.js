import './Login.css';
import AuthPanel from '../AuthPanel/AuthPanel.js'
import logo from "../../images/logo.svg"

function Login () {
  return (
    <section className="login">
      <form className="login__form" name="login">
        <div className="login__form-inputs">
          <div className="login__logo">
            <img alt='project logo' src={logo}/>
          </div>
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
        <div className="login__buttons-container">
          <AuthPanel type="signin"/>
          <span className="login__reg-request"> 
            Ещё не зарегистрированы?&nbsp;
            <button type="submit" className="login__reg-button">
              Регистрация
            </button>
          </span>
        </div>
      </form>
    </section>
  );
}

export default Login