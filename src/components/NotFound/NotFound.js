import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__info">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <a className="not-found__back" href="/">Назад</a>
    </section>
  );
}

export default NotFound;