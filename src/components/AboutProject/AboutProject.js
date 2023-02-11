import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__facts">
        <li className="about-project__facts-item">
          <h3 className="about-project__fact-title">Дипломный проект включал 5&nbsp;этапов</h3>
          <p className="about-project__fact-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
        </li>
        <li className="about-project__facts-item">
          <h3 className="about-project__fact-title">На выполнение диплома ушло 5&nbsp;недель</h3>
          <p className="about-project__fact-description">У каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__time-line">
        <div className="about-project__backend">
          <div className="about-project__stage-time about-project__stage-bold">1 неделя</div>
          <div className="about-project__stage-title">Back-end</div>
        </div>
        <div className="about-project__frontend">
          <div className="about-project__stage-time">4 недели</div>
          <div className="about-project__stage-title">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;