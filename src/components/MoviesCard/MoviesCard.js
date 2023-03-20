import { useLocation } from 'react-router-dom';
import "./MoviesCard.css";
import save from "../../images/save.svg";
import saveHover from "../../images/saveHover.svg"
import deleteButton from "../../images/delete-button.svg";

function MoviesCard(props) {
  const location = useLocation()
  const onlySavedMovies = location.pathname === '/saved-movies'

  const card = props.card

  return (
    <article className="movies-card">
      <div className="movies-card__details">
        <p className="movies-card__title">{ card.title }</p>
        <p className="movies-card__duration">{ card.duration }</p>
        <button className="movies-card__save-button">
          { !onlySavedMovies && !card.saved &&
            <img className="movies-card__save-image movies-card__save-image_normal" alt='save movie' src={ save }/> }
          { !onlySavedMovies && !card.saved &&
            <img className="movies-card__save-image movies-card__save-image_hover" alt='save movie' src={ saveHover }/> }
          { !onlySavedMovies && card.saved &&
            <img className="movies-card__save-image movies-card__save-image_normal" alt='save movie' src={ saveHover }/> }
          { onlySavedMovies && 
            <img className="movies-card__save-image movies-card__save-image_normal" alt='delete movie' src={ deleteButton }/> }
          { card.saved &&
            <img className="movies-card__save-image movies-card__save-image_hover" alt='delete movie' src={ deleteButton }/> }
        </button>
      </div>
      <div className="movies-card__poster-container"> 
        <img className="movies-card__poster" src={ card.src } alt="Movie Poster"/>
      </div>
    </article>    
  )
}

export default MoviesCard;