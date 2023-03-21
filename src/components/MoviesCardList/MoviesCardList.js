import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const [moviesLimit, setMoviesLimit] = useState(9);
  const location = useLocation()
  const onlySavedMovies = location.pathname === '/saved-movies'

  const durationRegex = /(?:(?<hours>\d+)ч\s*)?(?:(?<minutes>\d+)м)?/

  const movies = props.movies
    .filter(d => onlySavedMovies ? d.saved : true)
  let data = movies
    .map(d => {
      const matches = d.duration.match(durationRegex)
      const hours = parseInt(matches.groups.hours || 0)
      const minutes = parseInt(matches.groups.minutes || 0)
      const durationMinutes = hours * 60 + minutes
      return { ...d, durationMinutes }
    })

  const searchFilter = (props.searchFilter || '').trim()
  if (searchFilter) {
    data = data.filter(d => d.title.includes(searchFilter))
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
        { data.map((card, i) => <MoviesCard key={ i } card={ card } onlySavedMovies={ props.onlySavedMovies }/>) }
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
