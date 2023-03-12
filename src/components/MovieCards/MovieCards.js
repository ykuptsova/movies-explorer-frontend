import "./MovieCards.css";
import poster from "../../images/movie-card__image.png";
import save from "../../images/save.svg";
import saveHover from "../../images/saveHover.svg"

function MovieCards(props) {
  const data = [
    { title: '33 слова о дизайне', duration: '1ч 47м', src: poster },
    { title: '36 слов о дизайне', duration: '1ч 47м', src: poster },
    { title: '33 слова о дизайне', duration: '1ч 47м', src: poster },
    { title: '33 слова о дизайне', duration: '1ч 47м', src: poster },
    { title: '36 слов о дизайне', duration: '1ч 47м', src: poster },
    { title: '33 слова о дизайне', duration: '1ч 47м', src: poster },
  ]

  return (
    <>
      { data.map((d, i) => (
        <article className="movie-card" key={ i }>
          <div class="movie-details">
            <p className="movie-card__title">{ d.title }</p>
            <p className="movie-card__duration">{ d.duration }</p>
            <button className="movie-card__save-button">
              <img className="movie-card__save-image" alt='save movie' src={ save }/>
              <img className="movie-card__save-image_hover" alt='save movie' src={ saveHover }/>
            </button>
          </div>
          <div className="movie-card__poster-container"> 
            <img class="movie-card__poster" src={ d.src } alt="Movie Poster"/>
          </div>
        </article>
      )) }
    </>
  );
}

export default MovieCards;