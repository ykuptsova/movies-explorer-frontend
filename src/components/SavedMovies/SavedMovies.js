import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return (
     <Movies onlySavedMovies={ true }/>
  )
}

export default SavedMovies;