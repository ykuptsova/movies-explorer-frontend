import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links-list">
        <li className="portfolio__links-item">
          <a href="https://github.com/ykuptsova/how-to-learn" className="portfolio__link" target="_blank">Статичный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a href="https://github.com/ykuptsova/russian-travel" className="portfolio__link" target="_blank">Адаптивный сайт</a>
        </li>
        <li className="portfolio__links-item">
          <a href="https://github.com/ykuptsova/react-mesto-api-full" className="portfolio__link" target="_blank">Одностраничное приложение</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;