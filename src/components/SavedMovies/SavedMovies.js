import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return (
    <Movies
      loading={ props.loading }
      movies={ props.movies }
      search={ props.search } 
      handleSearchUpdate={ props.handleSearchUpdate }/>
  )
}

export default SavedMovies;