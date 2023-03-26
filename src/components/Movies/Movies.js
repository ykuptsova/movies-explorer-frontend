import React from 'react';
import { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'

function Movies (props) {
  const [searchFilter, setSearchFilter] = useState('');
  const [shortFilms, setShortFilms] = useState(false);

  return (
    <div className="movies">
      <Header/>
      <PageContent>
        <SearchForm
          setSearchFilter={ setSearchFilter }
          shortFilms={ shortFilms }
          setShortFilms={ setShortFilms } />
        <MoviesCardList
          movies={ props.movies }
          searchFilter={ searchFilter }
          shortFilms={ shortFilms }/>
      </PageContent>
      <Footer/>     
    </div>
  )
}

export default Movies; 