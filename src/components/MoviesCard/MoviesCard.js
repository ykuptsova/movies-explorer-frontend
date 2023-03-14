import "./MoviesCard.css";
import save from "../../images/save.svg";
import saveHover from "../../images/saveHover.svg"

function MoviesCard(props) {
  const card = props.card

  return (
    <article className="movies-card">
      <div className="movies-card__details">
        <p className="movies-card__title">{ card.title }</p>
        <p className="movies-card__duration">{ card.duration }</p>
        <button className="movies-card__save-button">
          <img className="movies-card__save-image" alt='save movie' src={ save }/>
          <img className="movies-card__save-image_hover" alt='save movie' src={ saveHover }/>
        </button>
      </div>
      <div className="movies-card__poster-container"> 
        <img className="movies-card__poster" src={ card.src } alt="Movie Poster"/>
      </div>
    </article>    
  )
}

export default MoviesCard;