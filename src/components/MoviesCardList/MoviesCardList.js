import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const durationRegex = /(?:(?<hours>\d+)ч\s*)?(?:(?<minutes>\d+)м)?/

  const movies = props.movies
    .filter(d => props.onlySavedMovies ? d.saved : true)
  let data = movies
    .slice(0, 9)
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
  
  const showMore = data.length < movies.length
  return (
    <section className="movies-cards-list">
      <div className={ 'movies-cards-list__cards' + (!showMore ? ' movies-cards-list__cards_no-more' : '') }>
        { data.map((card, i) => <MoviesCard key={ i } card={ card } onlySavedMovies={ props.onlySavedMovies }/>) }
      </div>
      { showMore &&
        <div className="movies-cards-list__show-more">
          <button className="movies-cards-list__show-more-button" type="button">Ещё</button>
        </div> }
    </section>
  )
}

export default MoviesCardList;
