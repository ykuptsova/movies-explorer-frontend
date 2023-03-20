import React from 'react';
import { useState } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from "../../images/search-form__button.svg";
import lens from "../../images/lens-icon.svg";

function SearchForm (props) {
  const [searchFilter, setSearchFilter] = useState(props.searchFilter);

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
            onChange={ e => setSearchFilter(e.target.value) }
            required
          />
          <button className="search-form__button" onClick={ () => props.setSearchFilter(searchFilter) }>
            <img className="search-form__button-image" alt='search movie' src={ search }/>
          </button>
        </form>
        <FilterCheckbox
          className="search-form__filter-checkbox-wide"
          shortFilms={ props.shortFilms }
          setShortFilms={ props.setShortFilms }/>
      </div>
      <FilterCheckbox
          className="search-form__filter-checkbox-narrow"
          shortFilms={ props.shortFilms }
          setShortFilms={ props.setShortFilms }/>
      <div className="search-form__divider"/>
    </section>
  )
}

export default SearchForm; 