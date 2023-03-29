import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
  const [moviesLimit, setMoviesLimit] = useState(9);
  const location = useLocation()
  const onlySavedMovies = location.pathname === '/saved-movies'

  const movies = (props.movies || [])
    .filter(m => onlySavedMovies ? m.saved : true)
  let data = movies
    .map(m => {
      const duration = m.duration
      return {
        title: m.nameRU,
        durationMinutes: duration,
        duration: duration > 60
          ? `${Math.floor(duration / 60)}ч ${Math.floor(duration % 60)}м`
          : `${Math.floor(duration % 60)}м`,
        src: m.thumbnail,        
        saved: m.saved,
      }
    })

  const searchFilter = (props.searchFilter || '').toLowerCase().trim()
  if (searchFilter) {
    data = data.filter(d => d.title.toLowerCase().includes(searchFilter))
  }

  const shortFilms = props.shortFilms
  if (shortFilms) {
    data = data.filter(d => d.durationMinutes <= 45)
  }

  const onMoreClicked = () => {
    setMoviesLimit(moviesLimit + 9)
  }

  const showMore = moviesLimit < data.length
  data = data.slice(0, moviesLimit)

  return (
    <section className="movies-cards-list">
      <div className={ 'movies-cards-list__cards' + (!showMore ? ' movies-cards-list__cards_no-more' : '') }>
        { props.movies !== null && data.length === 0
          ? <div>Ничего не найдено</div>
          : data.map((card, i) =>
              <MoviesCard key={ i } card={ card } onlySavedMovies={ props.onlySavedMovies }/>) }
      </div>
      { showMore &&
        <div className="movies-cards-list__show-more">
          <button
            className="movies-cards-list__show-more-button"
            type="button"
            onClick={ onMoreClicked }>Ещё</button>
        </div> }
    </section>
  )
}

export default MoviesCardList;
