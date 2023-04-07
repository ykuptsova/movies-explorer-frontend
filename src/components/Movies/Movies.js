import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import PageContent from '../PageContent/PageContent';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'


function Movies (props) {
  return (
    <div className="movies">
      <Header/>
      <PageContent>
        <SearchForm
          search={ props.search }
          handleSearchUpdate={ props.handleSearchUpdate }/>
        <MoviesCardList
          loading={ props.loading }
          movies={ props.movies }
          search={ props.search }
          handleMovieSaved={ props.handleMovieSaved }/>          
      </PageContent>
      <Footer/>     
    </div>
  )
}

export default Movies; 