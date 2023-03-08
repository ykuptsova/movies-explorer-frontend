// import './Profile.css';

function AuthPanel (props) {
  return (
    <section className="auth-panel">
      <button>
        { props.type === 'signin' ? 'Войти' : 'Зарегистрироваться' }
      </button>
    </section>
  );
}

export default AuthPanel