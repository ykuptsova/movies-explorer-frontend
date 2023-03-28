import './AuthPanel.css';

function AuthPanel (props) {
  return (
    <section className="auth-panel">
      <button
        disabled={ props.disabled }
        className={`auth-panel__button ${props.disabled && 'auth-panel__button_disabled'}`}>
        { props.type === 'signin' ? 'Войти' : 'Зарегистрироваться' }
      </button>
    </section>
  );
}

export default AuthPanel