import React from 'react';
import { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import poster from "../../images/movie-card__image.png";

function Movies (props) {
  const [searchFilter, setSearchFilter] = useState('');
  const [shortFilms, setShortFilms] = useState(false);

  const movies = [
    { title: '1 слово о дизайне', duration: '15м', src: poster, saved: true },
    { title: '2 слова о дизайне', duration: '42м', src: poster },
    { title: '3 слова о дизайне', duration: '1ч 10м', src: poster },
    { title: '4 слова о дизайне', duration: '1ч 20м', src: poster, saved: true },
    { title: '5 слов о дизайне', duration: '1ч 55м', src: poster },
    { title: '6 слов о дизайне', duration: '3ч 40м', src: poster },    
    { title: '7 слов о дизайне', duration: '1ч 20м', src: poster },
    { title: '8 слов о дизайне', duration: '1ч 55м', src: poster },
    { title: '9 слов о дизайне', duration: '3ч 40м', src: poster },    
    { title: '10 слов о дизайне', duration: '1ч 20м', src: poster },
    { title: '11 слов о дизайне', duration: '1ч 55м', src: poster },
    { title: '12 слов о дизайне', duration: '3ч 40м', src: poster },    
    { title: '13 слов о дизайне', duration: '1ч 20м', src: poster },
    { title: '14 слов о дизайне', duration: '1ч 55м', src: poster },
    { title: '15 слов о дизайне', duration: '3ч 40м', src: poster },    
  ]

  return (
    <div className="movies">
      <div className="movies__container">
        <Header
          handleSignIn={ props.handleSignIn }
          handleSignOut={ props.handleSignOut }
          onlySavedMovies={ props.onlySavedMovies }/>
        <SearchForm
          setSearchFilter={ setSearchFilter }
          shortFilms={ shortFilms }
          setShortFilms={ setShortFilms } />
        <MoviesCardList
          movies={ movies }
          searchFilter={ searchFilter }
          shortFilms={ shortFilms }
          onlySavedMovies={ props.onlySavedMovies }/>
      </div>
      <Footer/>     
    </div>
  )
}

export default Movies; 