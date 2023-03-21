import "./AboutMe.css";
import myPhoto from "../../images/about-me__photo.jpg"

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info">
        <div className="about-me__info-text">
          <h3 className="about-me__name">Ярославна</h3>
          <p className="about-me__status">Начинающий фронтенд-разработчик, 32 года</p>
          <p className="about-me__bio">Образование: Санкт-Петербургский государственный инженерно-экономический университет (ИНЖЭКОН), специальность: Экономист-менеджер на предприятии транспорта, специализация: Международные перевозки.</p>
          <p className="about-me__bio">Опыт работы: 7 лет в&nbsp;логистических компаниях на&nbsp;позиции Логист/Менеджер по&nbsp;работе с&nbsp;клиентами.</p>
          <p className="about-me__bio">Последние 2 года занимаюсь технической поддержкой пользователей It-продуктов и&nbsp;изучаю программирование. Прошла курс "Веб-разработчик" в&nbsp;ЯндексПрактикуме. Закончила курс по&nbsp;UX/UI&nbsp;Дизайну в&nbsp;Школе&nbsp;интернет-технологий&nbsp;Epic Skills.</p>
          <p className="about-me__bio">Языки: Английский - В2, Немецкий - В1+, Финский - А1.3, Русский - родной</p>
        </div>
        <ul className="about-me__info-links-list">
          <li className="about-me__info-links-item">
            <a href="https://github.com/ykuptsova" className="about-me__info-link" target="_blank">Github</a>
          </li>
        </ul>
        <div className="about-me__photo-container">
          <img className="about-me__photo" src={myPhoto} alt="Фото студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;