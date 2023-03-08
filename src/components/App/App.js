import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import LoggedInRoute from '../LoggedInRoute/LoggedInRoute'
import LoggedOutRoute from '../LoggedOutRoute/LoggedOutRoute'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile'
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const [user, setUser] = useState({ id: 1, name: 'Ярославна' });
  const handleSignIn = () => setUser({ id: 'test' })
  const handleSignOut = () => setUser({})

  return (
    <div className="App">
      <UserContext.Provider value={ user }>
        <Routes>
          <Route exact path="/" element={
            <Main handleSignIn={ handleSignIn } handleSignOut={ handleSignOut }/>}
          />
          <Route exact path="/movies" element={
            <LoggedInRoute element={ <Movies type='all'/> }/>
          }/>
          <Route exact path="/saved-movies" element={
            <LoggedInRoute element={ <Movies type='saved'/> }/>
          }/>
          <Route exact path="/profile" element={
            <LoggedInRoute element={
              <Profile handleSignIn={ handleSignIn } handleSignOut={ handleSignOut }/>
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
