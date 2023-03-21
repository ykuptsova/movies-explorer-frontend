import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__about">
        <h3 className="techs__about-title">7&nbsp;технологий</h3>
        <p className="techs__about-description">На курсе веб-разработки мы освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
      </div>
      <ul className="techs__links-list">
        <li className="techs__links-item">
          <a href="https://html.spec.whatwg.org/multipage/" className="techs__link" target="_blank">HTML</a>
        </li>
        <li className="techs__links-item">
          <a href="https://www.w3.org/Style/CSS/" className="techs__link" target="_blank">CSS</a>
        </li>
        <li className="techs__links-item">
          <a href="https://javascript.info/" className="techs__link" target="_blank">JS</a>
        </li>
        <li className="techs__links-item">
          <a href="https://reactjs.org/" className="techs__link" target="_blank">React</a>
        </li>
        <li className="techs__links-item">
          <a href="https://git-scm.com/" className="techs__link" target="_blank">Git</a>
        </li>
        <li className="techs__links-item">
          <a href="https://expressjs.com/" className="techs__link" target="_blank">Express.js</a>
        </li>
        <li className="techs__links-item">
          <a href="https://www.mongodb.com/" className="techs__link" target="_blank">mongoDB</a>
        </li>
      </ul>
    </section>
  );
}

export default Techs;