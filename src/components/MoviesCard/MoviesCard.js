import "./MoviesCard.css";
import save from "../../images/save.svg";
import saveHover from "../../images/saveHover.svg"
import deleteButton from "../../images/delete-button.svg";

function MoviesCard(props) {
  const card = props.card

  return (
    <article className="movies-card">
      <div className="movies-card__details">
        <p className="movies-card__title">{ card.title }</p>
        <p className="movies-card__duration">{ card.duration }</p>
        <button className="movies-card__save-button">
          { !props.onlySavedMovies && !card.saved &&
            <img className="movies-card__save-image" alt='save movie' src={ save }/> }
          { !props.onlySavedMovies && !card.saved &&
            <img className="movies-card__save-image_hover" alt='save movie' src={ saveHover }/> }
          { !props.onlySavedMovies && card.saved &&
            <img className="movies-card__save-image" alt='save movie' src={ saveHover }/> }
          { props.onlySavedMovies && 
            <img className="movies-card__save-image" alt='delete movie' src={ deleteButton }/> }
          { props.onlySavedMovies &&   
            <img className="movies-card__save-image_hover" alt='delete movie' src={ deleteButton }/> }
        </button>
      </div>
      <div className="movies-card__poster-container"> 
        <img className="movies-card__poster" src={ card.src } alt="Movie Poster"/>
      </div>
    </article>    
  )
}

export default MoviesCard;