// import './Profile.css';
import './AuthPanel.css';

function AuthPanel (props) {
  return (
    <section className="auth-panel">
      <button className="auth-panel__button">
        { props.type === 'signin' ? 'Войти' : 'Зарегистрироваться' }
      </button>
    </section>
  );
}

export default AuthPanel