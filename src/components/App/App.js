import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
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

function App() {
  const [user, setUser] = useState({ id: 1, name: 'Ярославна' });
  // uncomment to logout 
  //const [user, setUser] = useState({ });
  const handleSignOut = () => setUser({})

  return (
    <div className="app">
      <UserContext.Provider value={ user }>
        <Routes>
          <Route exact path="/" element={
            <Main/>}
          />
          <Route exact path="/movies" element={
            <LoggedInRoute element={ <Movies/> }/>
          }/>
          <Route exact path="/saved-movies" element={
            <LoggedInRoute element={ <SavedMovies/> }/>
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
