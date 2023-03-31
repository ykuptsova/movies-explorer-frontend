import { Routes, Route, useNavigate } from 'react-router-dom';
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

const readObject = (name, fallback) => {
  try {
    const m =  JSON.parse(localStorage.getItem(name)) || fallback
    console.log(name, m)
    return m
  } catch {
    return fallback
  }
}

const saveObject = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}


function App(props) {
  let navigate = useNavigate();

  const [user, setUser] = useState(mainApi.getStoredUser());

  // auth handling only manages user and redirects,
  //   jwt, user details and localStorage are handled by mainApi
  const handleSignUp = (user) => {    
    setUser(user);
    navigate('/movies');
  };
  const handleSignIn = (user) => {
    setUser(user);
    navigate('/movies');
  };
  const handleProfileUpdate = (user) => {
    setUser(user);
  };
  const handleSignOut = () => {    
    setUser({});
    navigate('/');
  };

  const [movies, setMovies] = useState(
    readObject('movies', null))
  useEffect(() => {
    saveObject('movies', movies)
  }, [movies])

  const [search, setSearch] = useState(
    readObject('search', { filter: '', short: false }))
  useEffect(() => {
    saveObject('search', search)
  }, [search])

  const [loading, setLoading] = useState(false)
  const handleSearchUpdate = (update) => {
    setSearch({ ...search, ...update })
    fetchMovies()
  };
  const fetchMovies = () => {
    if (movies !== null) return
    setLoading(true)
      Promise
        .all([
          mainApi.getSavedMovies(),
          moviesApi.getMovies(),
        ])
        .then(([savedMovies, movies]) => {
          const savedMoviesMap = new Map()
          savedMovies.forEach(m => savedMoviesMap.set(m.movieId, m))
          movies.forEach(m => {
            const savedMovie = savedMoviesMap.get(m.movieId)
            m.saved = savedMovie ? savedMovie._id : null            
          })          
          setLoading(false)
          setMovies(movies)          
        })
  }

  const handleMovieSaved = (movieId, saved) => {
    setMovies(movies.map(m => m.movieId === movieId ? { ...m, saved } : m))
  }

  useEffect(() => {   
    if (!user._id) {
      setMovies(null)
      setSearch({ filter: '', short: false })
    }
  }, [user]);

  return (
    <div className="app">
      <UserContext.Provider value={ user }>
        <Routes>
          <Route exact path="/" element={
            <Main/>
          }/>
          <Route exact path="/movies" element={
            <LoggedInRoute element={
              <Movies
                loading={ loading }
                movies={ movies }
                search={ search }
                handleSearchUpdate={ handleSearchUpdate }
                handleMovieSaved={ handleMovieSaved }/>
            }/>
          }/>
          <Route exact path="/saved-movies" element={
            <LoggedInRoute element={
              <SavedMovies
                loading={ loading }
                movies={ movies }
                handleMovieSaved={ handleMovieSaved }
                fetchMovies={ fetchMovies }/>
            }/>
          }/>
          <Route exact path="/profile" element={
            <LoggedInRoute element={
              <Profile
                handleSignOut={ handleSignOut }
                handleProfileUpdate={ handleProfileUpdate }/>
            }/>
          }/>
          <Route exact path="/signin" element={
            <LoggedOutRoute element={
              <Login handleSignIn={ handleSignIn }/>
            }/>
          }/>
          <Route exact path="/signup" element={
            <LoggedOutRoute element={
              <Register handleSignUp={ handleSignUp }/>
            }/>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
