import Movies from '../Movies/Movies';
import { useEffect, useState } from 'react';

function SavedMovies(props) {
  const [search, setSearch] = useState({ filter: '', short: false })

  const handleSearchUpdate = (update) => {
    setSearch({ ...search, ...update })
  };

  // force fetch saved movies on first mount
  useEffect(() => {
    props.fetchMovies()
  }, [])

  return (
    <Movies
      loading={ props.loading }
      movies={ props.movies }
      search={ search } 
      handleSearchUpdate={ handleSearchUpdate }
      handleMovieSaved={ props.handleMovieSaved }/>
  )
}

export default SavedMovies;