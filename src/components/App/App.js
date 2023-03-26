import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import mainApi from '../../utils/MainApi.js'
import moviesApi from '../../utils/MoviesApi.js'
import UserContext from '../../contexts/UserContext.js';
import LoggedInRoute from '../LoggedInRoute/LoggedInRoute'
import LoggedOutRoute from '../LoggedOutRoute/LoggedOutRoute'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App(props) {
  const [user, setUser] = useState({ id: 1, name: 'Ярославна' });
  // uncomment to logout 
  //const [user, setUser] = useState({ });
  const handleSignOut = () => setUser({})

  const [movies, setMovies] = useState([])
  useEffect(() => {
    if (!user) {
      setMovies([])
      return
    }
    Promise
      .all([
        mainApi.getSavedMovies(),
        moviesApi.getMovies(),
      ])
      .then(([savedMovies, movies]) => {
        const savedMovieIds = new Set(savedMovies.map(m => m.movieId))
        movies.forEach(m => m.saved = savedMovieIds.has(m.movieId))
        setMovies(movies)
      })
  }, [user]);

  return (
    <div className="app">
      <UserContext.Provider value={ user }>
        <Routes>
          <Route exact path="/" element={
            <Main/>}
          />
          <Route exact path="/movies" element={
            <LoggedInRoute element={
              <Movies movies={ movies }/>
            }/>
          }/>
          <Route exact path="/saved-movies" element={
            <LoggedInRoute element={
              <SavedMovies movies={ movies }/>
            }/>
          }/>
          <Route exact path="/profile" element={
            <LoggedInRoute element={
              <Profile handleSignOut={ handleSignOut }/>
            }/>
          }/>
          <Route exact path="/signin" element={
            <LoggedOutRoute element={ <Login/> }/>
          }/>
          <Route exact path="/signup" element={
            <LoggedOutRoute element={ <Register/> }/>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
