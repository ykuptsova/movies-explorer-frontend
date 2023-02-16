import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.jsx';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({ id: 1 });
  const handleSignIn = () => {
    setCurrentUser({ id: 'test' })
  }
  const handleSignOut = () => {
    setCurrentUser({})
  }
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={
            <Main handleSignIn={ handleSignIn } handleSignOut={ handleSignOut }/>}
          />
          <Route exact path="/movies" element={<Movies />} />
          {/* <Route exact path="/saved-movies" element={<SavedMovies />} /> */}
          {/* <Route exact path="/profile" element={<Profile />} /> */}
          {/* <Route exact path="/signin" element={<Login />} /> */}
          {/* <Route exact path="/signup" element={<Register />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
