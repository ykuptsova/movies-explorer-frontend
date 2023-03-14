import React from 'react';
import { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies (props) {
  const [searchFilter, setSearchFilter] = useState('');
  const [shortFilms, setShortFilms] = useState(false);

  return (
    <div className="movies">
      <div className="movies__container">
        <Header handleSignIn={ props.handleSignIn } handleSignOut={ props.handleSignOut }/>
        <SearchForm
          setSearchFilter={ setSearchFilter }
          shortFilms={ shortFilms }
          setShortFilms={ setShortFilms } />
        <MoviesCardList searchFilter={ searchFilter } shortFilms={ shortFilms }/>
      </div>
      <Footer/>     
    </div>
  )
}

export default Movies; 