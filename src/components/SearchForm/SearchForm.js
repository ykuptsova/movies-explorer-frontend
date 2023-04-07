import React from 'react';
import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from "../../images/search-form__button.svg";
import lens from "../../images/lens-icon.svg";

function SearchForm (props) {
  const [filter, setFilter] = useState(props.search.filter);

  const handleFilterClick = () => {
    props.handleSearchUpdate({ filter })
  }

  const handleShortFilmsClick = (short) => {
    props.handleSearchUpdate({ short })
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__input-group" onSubmit={ e => e.preventDefault() }>
          <img className="search-form__lens-image" alt='lens icon' src={ lens }/>
          <input
            className="search-form__input"            
            name="search"
            type="text"
            placeholder="Фильм"
            autoComplete="off"
            value={ filter }
            onChange={ e => setFilter(e.target.value) }
          />
          <button className="search-form__button" onClick={ handleFilterClick }>
            <img className="search-form__button-image" alt='search movie' src={ search }/>
          </button>
        </form>
        <FilterCheckbox
          className="search-form__filter-checkbox-wide"
          shortFilms={ props.search.short }
          setShortFilms={ handleShortFilmsClick }/>
      </div>
      <FilterCheckbox
        className="search-form__filter-checkbox-narrow"
        shortFilms={ props.search.short }
        setShortFilms={ handleShortFilmsClick }/>
      <div className="search-form__divider"/>
    </section>
  )
}

export default SearchForm; 