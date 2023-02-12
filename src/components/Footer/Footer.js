import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <p className="footer__copyright">&copy; 2022</p>
      <ul className="footer__links-list">
        <li className="footer__links-item">
          <a href="https://practicum.yandex.ru" className="footer__link" target="_blank">Яндекс.Практикум</a>
        </li>
        <li className="footer__links-item">
          <a href="https://github.com/" className="footer__link" target="_blank">Github</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;