import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import poster from "../../images/movie-card__image.png";

function MoviesCardList(props) {
  const durationRegex = /(?:(?<hours>\d+)ч\s*)?(?:(?<minutes>\d+)м)?/
  let data = [
    { title: '1 слово о дизайне', duration: '15м', src: poster },
    { title: '2 слова о дизайне', duration: '42м', src: poster },
    { title: '3 слова о дизайне', duration: '1ч 10м', src: poster },
    { title: '4 слова о дизайне', duration: '1ч 20м', src: poster },
    { title: '5 слов о дизайне', duration: '1ч 55м', src: poster },
    { title: '6 слов о дизайне', duration: '3ч 40м', src: poster },    
  ].map(d => {
    const matches = d.duration.match(durationRegex)
    const hours = parseInt(matches.groups.hours || 0)
    const minutes = parseInt(matches.groups.minutes || 0)
    const durationMinutes = hours * 60 + minutes
    return { ...d, durationMinutes }
  })

  const searchFilter = props.searchFilter.trim()
  if (searchFilter) {
    data = data.filter(d => d.title.includes(searchFilter))
  }

  const shortFilms = props.shortFilms
  if (shortFilms) {
    data = data.filter(d => d.durationMinutes <= 45)
  }
  
  return (
    <section className="movies-cards-list">
      { data.map((card, i) => <MoviesCard key={ i } card={ card }/>) }
    </section>
  )
}

export default MoviesCardList;
