import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


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
          : `${duration}м`,
        src: m.thumbnail,        
        saved: m.saved,
      }
    })

  const searchFilter = (props.search.filter || '').toLowerCase().trim()
  if (searchFilter) {
    data = data.filter(d => d.title.toLowerCase().includes(searchFilter))
  }

  const shortFilms = props.search.short
  if (shortFilms) {
    data = data.filter(d => d.durationMinutes <= 45)
  }

  const onMoreClicked = () => {
    setMoviesLimit(moviesLimit + 9)
  }

  const showPreloader = props.loading
  const showNeedFilter = props.movies !== null && searchFilter.length === 0
  const showNothingFound = !showNeedFilter && props.movies !== null && data.length === 0
  const showMovies = !showNeedFilter && !showNothingFound && props.movies !== null && data.length > 0
  const showMore = !showNeedFilter && !showNothingFound && moviesLimit < data.length

  data = data.slice(0, moviesLimit)

  return (
    <section className="movies-cards-list">
      { showPreloader && <Preloader/> }
      { showNeedFilter && (
        <div className='movies-cards-list__message'>
          Нужно ввести ключевое слово
        </div>
      ) }
      { showNothingFound && (
        <div className='movies-cards-list__message'>
          Ничего не найдено
        </div>
      ) }
      { showMovies && (
        <div className={ 'movies-cards-list__cards' + (!showMore ? ' movies-cards-list__cards_no-more' : '') }>
          { data.map((card, i) =>
              <MoviesCard key={ i } card={ card } onlySavedMovies={ onlySavedMovies }/>) }
        </div>
      ) }
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
