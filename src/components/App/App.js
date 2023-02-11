import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/saved-movies" element={<SavedMovies />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/signin" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
