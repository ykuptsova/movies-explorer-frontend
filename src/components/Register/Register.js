import './Register.css';
import AuthPanel from '../AuthPanel/AuthPanel.js'
import logo from "../../images/logo.svg"

function Register () {
  return (
    <section className="register">
       <form className="register__form" name="register">
       <div className="register__form-inputs">
          <div className="register__logo">
            <img alt='project logo' src={logo}/>
          </div>
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
        <div className="register__buttons-container">
            <AuthPanel type="signup"/>
            <span className="register__login-request"> 
              Уже зарегистрированы?&nbsp;
              <button type="submit" className="register__login-button">
                Войти
              </button>
            </span>
        </div>
      </form>
    </section>
  );
}

export default Register