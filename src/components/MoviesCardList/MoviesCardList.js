import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import { SHORTFILMS_DURATION, DEVICE_PARAMS } from '../../utils/constants.js';


function MoviesCardList(props) {
  const iw = window.innerWidth
  const [moviesLimit, setMoviesLimit] = useState(
    iw > DEVICE_PARAMS.tablet.width ? DEVICE_PARAMS.desktop.total : 
    iw > DEVICE_PARAMS.mobile.width ? DEVICE_PARAMS.tablet.total : 
    DEVICE_PARAMS.mobile.total
  );
  const location = useLocation()
  const onlySavedMovies = location.pathname === '/saved-movies'

  const movies = (props.movies || [])
    .filter(m => onlySavedMovies ? m.saved : true)
  let data = movies
    .map(m => {
      const duration = m.duration
      return {
        movieId: m.movieId,
        title: m.nameRU,
        durationMinutes: duration,
        duration: duration > 60
          ? `${Math.floor(duration / 60)}ч ${Math.floor(duration % 60)}м`
          : `${duration}м`,
        src: m.thumbnail,        
        trailerLink: m.trailerLink,
        saved: m.saved,
      }
    })

  const searchFilter = (props.search.filter || '').toLowerCase().trim()
  if (searchFilter) {
    data = data.filter(d => d.title.toLowerCase().includes(searchFilter))
  }

  const shortFilms = props.search.short
  if (shortFilms) {
    data = data.filter(d => d.durationMinutes <= SHORTFILMS_DURATION)
  }

  const handleMoreClicked = () => {
    const iw = window.innerWidth
    const delta = iw > DEVICE_PARAMS.tablet.width ? 3 : 2 
    setMoviesLimit(moviesLimit + delta)
  }

  const handleMovieSave = (card) => {    
    if (card.saved) {
      mainApi
        .removeSavedMovie(card.saved)      
        .then(() => props.handleMovieSaved(card.movieId, null))
    } else {
      const movie = props.movies.find(m => m.movieId === card.movieId)
      const payload = { ...movie }
      payload.movieId = payload._id
      delete payload._id
      delete payload.saved  
      mainApi
        .addSavedMovie(payload)
        .then(m => props.handleMovieSaved(m.movieId, m._id))
    }
  }

  const showPreloader = props.loading
  const showNeedFilter = !onlySavedMovies && props.movies !== null && searchFilter.length === 0
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
            <MoviesCard
              key={ card.movieId }
              card={ card }
              handleMovieSave={ handleMovieSave }
              onlySavedMovies={ onlySavedMovies }/>) }
        </div>
      ) }
      { showMore &&
        <div className="movies-cards-list__show-more">
          <button
            className="movies-cards-list__show-more-button"
            type="button"
            onClick={ handleMoreClicked }>Ещё</button>
        </div> }
    </section>
  )
}

export default MoviesCardList;
